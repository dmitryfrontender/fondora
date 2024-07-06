
// рабочий код 
import React, { useState, useRef, useEffect, useCallback } from 'react';
import SVGIcon from '../../assets/icons/svgComponent';
import './AudioRecorder.scss';

const AudioRecorder: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [isTrackAvailable, setIsTrackAvailable] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const audioChunksRef = useRef<Blob[]>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);
  const xPositionRef = useRef<number>(0);
  const recordingIntervalRef = useRef<number | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const animationTimeoutRef = useRef<number | null>(null);
  const [recordingsArr, setRecordingsArr] = useState<string[]>([]);


    const drawWaveform = useCallback(() => {
    if (!canvasRef.current || !dataArrayRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
  
    const bufferLength = dataArrayRef.current.length;
    const width = canvas.width;
    const height = canvas.height;
    const barWidth = 9; // Width of each line
    const gapWidth = 7; // Width of the gap between lines
    const centerY = height / 2; // Center of the canvas
    const sensitivity = 0.5; // Adjust this value to reduce the sensitivity (0.5 means 50% of the original height)
  
    // Shift the canvas content to the left if it overflows
    if (xPositionRef.current + barWidth >= width) {
      const shiftAmount = barWidth  + gapWidth; // Shift by the width of the line plus the gap
      const imageData = ctx.getImageData(shiftAmount, 0, width - shiftAmount, height);
      ctx.putImageData(imageData, 0, 0);
      ctx.clearRect(width - shiftAmount, 0, shiftAmount, height); // Clear the newly exposed area
      // PUT THE GAP BETWEEN LINES WHERE CANVAS IS OVERFLOWS IN `()`
      xPositionRef.current = width - (shiftAmount + 8); // Adjust the position for the next line 
    }
  
    // Draw new data at the current position
    for (let i = 0; i < bufferLength; i++) {
      const v = dataArrayRef.current[i] / 128.0;
      const barHeight = (v * height * sensitivity) / 2;
  
      ctx.fillStyle = '#9fe8ff'; // Color of the line
      ctx.fillRect(xPositionRef.current, centerY - barHeight, barWidth, barHeight * 2); // Draw lines from the center
    }
  
    // Update the xPosition for the next line
    xPositionRef.current += barWidth + gapWidth;
  }, []);
  
  
  const updateWaveform = useCallback(() => {
    if (!analyserRef.current || !dataArrayRef.current) return;

    analyserRef.current.getByteFrequencyData(dataArrayRef.current);
    drawWaveform();
    animationTimeoutRef.current = window.setTimeout(updateWaveform, 200); // Установить интервал обновления
  }, [drawWaveform]);

  const handleStartRecording = async () => {
    if (isRecording) return;

    if (!streamRef.current) {
      streamRef.current = await navigator.mediaDevices.getUserMedia({ audio: true });
    }

    // const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(streamRef.current);
    mediaRecorderRef.current = mediaRecorder;

    if (!audioContextRef.current) {
    audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    const source = audioContextRef.current.createMediaStreamSource(streamRef.current);
    analyserRef.current = audioContextRef.current.createAnalyser();
    source.connect(analyserRef.current);
    analyserRef.current.fftSize = 256; // Меньший размер для более детализированной амплитуды
    const bufferLength = analyserRef.current.frequencyBinCount;
    dataArrayRef.current = new Uint8Array(bufferLength);
    }
    mediaRecorder.ondataavailable = (event) => {
      audioChunksRef.current.push(event.data);
    };

    mediaRecorder.onstop = () => {
      // const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
      // const audioUrl = URL.createObjectURL(audioBlob);
      // setAudioUrl(audioUrl);
      // audioChunksRef.current = [];
      if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current);
      // if (audioContextRef.current) audioContextRef.current.close();
      // xPositionRef.current = 0; // Сбрасываем позицию для следующей записи
    };

    mediaRecorder.start();
    setIsRecording(true);
    setIsPaused(false);
    recordingIntervalRef.current = window.setInterval(() => {
      setRecordingTime(prevTime => prevTime + 1);
    }, 1000);
    updateWaveform();
  };

  const handleDeleteRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
    }
    setRecordingTime(0);
    setIsRecording(false);
    setIsTrackAvailable(false);
    setAudioUrl(null);
    audioChunksRef.current = [];
    xPositionRef.current = 0;

    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      }
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setIsTrackAvailable(true);
      if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current);
    }
  };

  const handlePauseRecording = () => {
    if (isPaused) return;
    mediaRecorderRef.current?.pause();
    if (recordingIntervalRef.current) clearInterval(recordingIntervalRef.current);
    setIsPaused(true);
    handleStopRecording();
  };

  const handleSaveRecording = () => {
    handlePauseRecording();
    const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/mp3' });
    const audio = URL.createObjectURL(audioBlob);
    setAudioUrl(audio);
    setRecordingsArr(prevRecordings => [...prevRecordings, audio]);

    setRecordingTime(0);
    setIsRecording(false);
    setIsTrackAvailable(false);
    setAudioUrl(null);
    audioChunksRef.current = [];
    xPositionRef.current = 0;

    //Save record to array
    // setRecordingsArr(prevRecordings => [...prevRecordings, audio]);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="audio-recorder">
      <div className="innerCanvas">
        {
          isRecording || isTrackAvailable ? (
            <>
              <button className="deleteBtn" onClick={handleDeleteRecording}>
                <SVGIcon name={"deleteRecordBtn"} size={30} />
              </button>
              <canvas ref={canvasRef} width="600" height="50" className="waveform-canvas"></canvas>
              <div className="timeRecord">
                {formatTime(recordingTime)}
              </div>
              <button className="pauseBtn" onClick={handlePauseRecording}>
                <SVGIcon name={"pauseRecordBtn"} size={20} />
              </button>
            </>

          )
          : (
            <>
              <span className="recordText">Нажите кнопку для записи...</span>
            </>
          )
        }
      </div>
      {/* <button onClick={isRecording ? handleStopRecording : handleStartRecording} className="record-button">
        {isRecording ? 'Stop' : 'Record'}
      </button> */}
       <button onClick={handleStartRecording} className="record-button">
        {isRecording ? (
          <div className="sendBtn" onClick={handleSaveRecording}>
            <SVGIcon name={"sendTgBtn"} size={20} />
          </div>
        ) : (
          <div className="recordBtn">
            <SVGIcon name={"startRecordBtn"} size={40} />
          </div>
        )}
      </button>

      
      {/* {audioUrl && (
        <AudioPlayer audioUrl={audioUrl} />
      )} */}


    </div>
  );
};

export default AudioRecorder;


// interface AudioPlayerProps {
//   audioUrl: string;
// }

// const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl }) => {
//   const audioRef = useRef<HTMLAudioElement | null>(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     if (audioRef.current) {
//       const updateProgress = () => {
//         const currentTime = audioRef.current?.currentTime || 0;
//         const duration = audioRef.current?.duration || 1;
//         setProgress((currentTime / duration) * 100);
//       };
//       audioRef.current.addEventListener('timeupdate', updateProgress);

//       return () => {
//         audioRef.current?.removeEventListener('timeupdate', updateProgress);
//       };
//     }
//   }, []);

//   const togglePlayPause = () => {
//     if (audioRef.current) {
//       if (isPlaying) {
//         audioRef.current.pause();
//       } else {
//         audioRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   return (
//     <div className="audio-player">
//       <button onClick={togglePlayPause} className="play-pause-button">
//         {isPlaying ? 'Pause' : 'Play'}
//       </button>
//       <div className="progress-bar">
//         <div className="progress" style={{ width: `${progress}%` }}></div>
//       </div>
//       <audio ref={audioRef} src={audioUrl}></audio>
//     </div>
//   );
// };

