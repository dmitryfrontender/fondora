import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import SVGIcon from '../../assets/icons/svgComponent';
import './AudioPlayer.scss';

interface AudioPlayerProps {
  audioUrl: string;
  onButtonClick: () => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl, onButtonClick }) => {
  const waveformRef = useRef<HTMLDivElement | null>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (waveformRef.current) {
      // Инициализация WaveSurfer

      // const containerWidth = waveformRef.current.clientWidth;
      // const containerHeight = waveformRef.current.clientHeight;


      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        // container: '200',

        waveColor: '#fff',
        progressColor: '#BAD5FF',
        cursorColor: 'transparent',
        barWidth: 2,
        barRadius: 2,
        barGap: 3,
        height: 50,
        // width: 200,
        // height: 50,
        normalize: true,
        backend: 'WebAudio',
      });

      // Обработка ошибок при загрузке аудиофайла
      wavesurfer.current.on('error', (e) => {
        console.error(e);
        setError('Не удалось загрузить аудиофайл.');
      });

      // Событие при завершении проигрывания
      wavesurfer.current.on('finish', () => {
        setIsPlaying(false);
      });

      // Обновление времени воспроизведения
      wavesurfer.current.on('audioprocess', () => {
        setCurrentTime(wavesurfer.current ? wavesurfer.current.getCurrentTime() : 0);
      });

      // Установка общей длительности аудио
      wavesurfer.current.on('ready', () => {
        setDuration(wavesurfer.current ? wavesurfer.current.getDuration() : 0);
      });

      // Загрузка аудиофайла
      wavesurfer.current.load(audioUrl);

      // Слушатель изменения размера окна для адаптивности
      // const handleResize = () => {
      //   if (wavesurfer.current && waveformRef.current) {
      //     wavesurfer.current.setOptions({
      //       container: waveformRef.current,
      //     });
      //     wavesurfer.current.drawBuffer(); // Перерисовка волны при изменении размера окна
      //   }
      // };
      const handleResize = () => {
        if (wavesurfer.current && waveformRef.current) {
          wavesurfer.current.setOptions({
            container: waveformRef.current,
          });
        }
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        wavesurfer.current && wavesurfer.current.destroy();
      };
    }
  }, [audioUrl]);

  const togglePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    wavesurfer.current && wavesurfer.current.playPause();
    onButtonClick();
    
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className='AudioPlayer'>
      <button onClick={togglePlayPause}>
        {isPlaying ? 
          <div className="pauseBtn">
            <SVGIcon name={"pauseRecordBtn"} size={20}/>
          </div>
          : 
          <div className="playBtn">
            <SVGIcon name={"playRecordBtn"} size={20}/>
          </div>
        }
      </button>
      <div
        className='waveform'
        ref={waveformRef}
        // style={{
        //   borderRadius: '10px',
        //   overflow: 'hidden',
        //   width: '22vw', // Ensure full width for responsiveness
        // }}
      />
      <div className='timePlay'>
        {isPlaying ?
          <>
            {formatTime(currentTime + 1)} 
          </>
          :
          <>
            {formatTime(duration + 1)}
          </>
        }
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default AudioPlayer;



