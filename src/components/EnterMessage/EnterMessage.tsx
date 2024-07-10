import React, { useCallback, useEffect, useState } from 'react';
import './EnterMessage.scss';
import SVGIcon from '../../assets/icons/svgComponent';
import TextareaAutosize from 'react-textarea-autosize';
import { messagesData } from '../../Data/MessagesData';
import { IMessages } from '../../model/MessagesModel';
import { setTypingState } from '../../store/rootSlice';
import { useDispatch } from 'react-redux';
import ChatSmiles from '../ChatExtra/ChatSmiles/ChatSmiles';
import ChatGifs from '../ChatExtra/ChatGifs/ChatGifs';
import AddPhoto from '../ChatExtra/AddPhotos/AddPhotos';
import AudioRecorder from '../AudioRecorder/AudioRecorder';
// import { click } from '@testing-library/user-event/dist/click';

interface IProps {
	chatId: string;
	forceRerender?: () => void | undefined;
}

const EnterMessage = ({ chatId, forceRerender }: IProps) => {
	const [areaValue, setAreaValue] = useState('');
	const [sendBtn, setSendBtn] = useState(false);

	const [smileBlock, setSmileBlock] = useState<boolean>(false);
	const [mediaBlock, setMediaBlock] = useState<boolean>(false);
	const [imagesBlock, setImagesBlock] = useState<boolean>(false);
	const [voiceRecorder, setVoiceRecorder] = useState<boolean>(false);

	const dispatch = useDispatch();

	const refreshData = useCallback(() => {
		if (forceRerender) forceRerender();
	}, [forceRerender]);

    const resizeArea = (e: any) => {

        const value = e.target.value;

		if (value.trim().length > 0 || value.length === 0) {
			setAreaValue(value);

		}
		
        setSendBtn(value.trim().length > 0);
    };

    const handleKeyPress = useCallback((event: any) => {

		if(event.code === 'Enter' || event.code === 'Code'){
			if (!event.shiftKey) {
			
				
		
					if (sendBtn && event.code !== 'Code') {
						
						event.preventDefault();
					}
			
					
					const trimmedText = areaValue.trim(); 
					if (trimmedText) {
						const date = new Date();
						const timeSend = `${date.getHours() <= 9 ? `0${date.getHours()}` : date.getHours()}:${date.getMinutes() <= 9 ? `0${date.getMinutes()}` : date.getMinutes()}`;
		
						const newMessage = messagesData.filter((elem: IMessages) => {
							return elem.id === +chatId;
						});
		
						let messageId = 0;
		
						newMessage.forEach((elem: any) => {
							elem.messages.forEach((id: any) => {
								messageId = id.id;
							});
		
							elem.messages.push({
								id: messageId + 1,
								text: trimmedText, // Use trimmed text
								time: timeSend,
								daySend: ['Tuesday'],
								unRead: false,
								owner: true,
								reaction: ''
							});
						});
		
						messageId = 0;
						refreshData();
						// if (scrollBottom) scrollBottom();
		
						setAreaValue('');
						setSendBtn(false);

		
						// setTimeout(() => {
						// 	const ownerMessage = messagesData[messagesData.length -1]
							
						// }, 1000)
		
						setTimeout(() => {
							dispatch(setTypingState(true));
						}, 1000);

						setTimeout(() => {
							const date = new Date();
							const timeSend = `${date.getHours() <= 9 ? `0${date.getHours()}` : date.getHours()}:${date.getMinutes() <= 9 ? `0${date.getMinutes()}` : date.getMinutes()}`;
		
							newMessage.forEach((elem: any) => {
								elem.messages.forEach((id: any) => {
									messageId = id.id;
								});
		
								elem.messages.push({
									id: messageId + 1,
									text: `companion answer ${+messageId - 1}`,
									time: timeSend,
									daySend: ['Tuesday'],
									unRead: false,
									owner: false,
									reaction: ''
								});
							});
							messageId = 0;
							refreshData();

							dispatch(setTypingState(false));
						}, 3000);
					}
				}

		}
       
	}, [sendBtn, areaValue, refreshData, chatId, dispatch])
	const handleSmile = (smile: string) => {
		setAreaValue(areaValue + smile);
		
	};

	const handleGif = (gif: string) => {
		let messageId = 0;
		const newMessage = messagesData.filter((elem: IMessages) => {
			return elem.id === +chatId;
		});
		newMessage.forEach((elem: any) => {

			elem.messages.forEach((message: any) => {
				if (!messageId || message.id > messageId) {
					messageId = message.id;
				}
			});

			elem.messages.push({
				id: messageId + 1,
				text: '',
				imageUrl: gif,
				time: '21:21',
				daySend: ['Tuesday'],
				unRead: false,
				owner: true
			});

		});
		messageId = 0;
		refreshData();
	};

	const handlePhoto = (photos: any) => {
		const photosArr = photos.map((elem: any) => {
			return elem.src;
		});

		let messageId = 0;
		const newMessage = messagesData.filter((elem: IMessages) => {
			return elem.id === +chatId;
		});
		newMessage.forEach((elem: any) => {
			elem.messages.forEach((message: any) => {
				if (!messageId || message.id > messageId) {
					messageId = message.id;
				}
			});

			elem.messages.push({
				id: messageId + 1,
				text: '',
				storagePhotoArr: photosArr,
				time: '21:21',
				daySend: ['Tuesday'],
				unRead: false,
				owner: true
			});

		});
		messageId = 0;
		refreshData();
	};

	const selectExtra = (extra: string) => {
		switch (extra) {
			case 'smile':
				if (smileBlock) {
					setSmileBlock(false);
				} else {
					setMediaBlock(false);
					setImagesBlock(false);
					setVoiceRecorder(false);
					setSmileBlock(true);


				}
				break;
			case 'media':
				if (mediaBlock) {
					setMediaBlock(false);
				} else {
					setSmileBlock(false);
					setImagesBlock(false);
					setVoiceRecorder(false);
					setMediaBlock(true);


				}
				break;
			case 'images':
				if (imagesBlock) {
					setImagesBlock(false);
				} else {
					setSmileBlock(false);
					setMediaBlock(false);
					setVoiceRecorder(false);
					setImagesBlock(true);


				}
				break;
				case 'voiceRecorder':
					// console.log(voiceRecorder);
					
					if (voiceRecorder) {
						setVoiceRecorder(false);
					} else {
						setSmileBlock(false);
						setMediaBlock(false);
						setImagesBlock(false);
						setVoiceRecorder(true);
					}
		}
	};

	useEffect(() => {
		areaValue ? setSendBtn(true) : setSendBtn(false);
		

		document.addEventListener('keydown', handleKeyPress, false);
		return () => {
			document.removeEventListener('keydown', handleKeyPress, false);
		};

	}, [areaValue, handleKeyPress]);

	return (
		<>
			<div className='inputBlock'>
				{!mediaBlock && !imagesBlock && !voiceRecorder &&(
					<div className='inputWrapper'>
						<div className='input'>
							<TextareaAutosize placeholder='Напишите сообщение...' value={areaValue} minRows={2} maxRows={4} onChange={resizeArea} />
							<div className={`sendBtn ${sendBtn ? 'activeSendBtn' : ''}`}>
								<button onClick={() => handleKeyPress({ code: 'Code' })}>
									<SVGIcon name='sendTgBtn' size={20} />
								</button>
							</div>
						</div>
					</div>
				)}


				{/* <AudioRecorder/> */}

				{smileBlock && <ChatSmiles addSmile={handleSmile} />}
				{imagesBlock && <ChatGifs addGif={handleGif} />}
				{mediaBlock && <AddPhoto addPhoto={handlePhoto} />}
				{voiceRecorder && <AudioRecorder />}

				<div className='buttonWrapper'>
					<div className='leftPanel'>
						<button onClick={() => selectExtra('images')}>
							<SVGIcon size={20} name='gifBtn' style={imagesBlock ? { fill: '#F22271 ' } : { fill: '#ACACAC' }} />
						</button>
						{/* <button onClick={() => setSmileBlock(!smileBlock)}> */}
						<button onClick={() => selectExtra('smile')}>
							<SVGIcon size={20} name='smileBtn' style={smileBlock ? { fill: '#F22271 ' } : { fill: '#ACACAC' }} />
						</button>
						<button onClick={() => selectExtra('media')}>
							<SVGIcon size={20} name='fileBtn' style={mediaBlock ? { fill: '#F22271 ' } : { fill: '#ACACAC' }} />
						</button>
					</div>
					<div className='rightPanel'>
						<button onClick={() => selectExtra('voiceRecorder')}>
							<SVGIcon size={20} name='voiceMessageBtn' style={voiceRecorder ? { fill: '#F22271 ' } : { fill: '#ACACAC' }} />
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default EnterMessage;
