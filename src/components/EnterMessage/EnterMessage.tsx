import React, { useEffect, useState } from 'react';
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

	const dispatch = useDispatch();

	const refreshData = () => {
		if (forceRerender) forceRerender();
	};

	const resizeArea = (e: any) => {
		if (e.target.value.length === 0) {
			setAreaValue('');
			setSendBtn(false);
		} else if (e.target.value.length <= 1) {
			setAreaValue(e.target.value.trim());

			setSendBtn(false);
			if (e.target.value !== '') {
				setSendBtn(true);
			}
		} else if (e.target.value.length > 1) {
			setAreaValue(e.target.value);
			setSendBtn(true);
		}
	};

	const handleKeyPress = (event: any) => {
		if (event.code === 'Enter') {
			setAreaValue('');

			setSendBtn(false);

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
					text: areaValue,
					time: timeSend,
					daySend: ['Tuesday'],
					unRead: false,
					owner: true,
					reaction: ''
				});

				// console.log(elem);
			});
			messageId = 0;

			refreshData();

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

					// console.log(elem);
				});
				messageId = 0;
				refreshData();
				dispatch(setTypingState(false));
			}, 3000);
		}
	};

	const handleSmile = (smile: string) => {
		setAreaValue(areaValue + smile);
	};

	const handleGif = (gif: string) => {
		let messageId = 0;
		const newMessage = messagesData.filter((elem: IMessages) => {
			return elem.id === +chatId;
		});
		newMessage.forEach((elem: any) => {
			// elem.messages.forEach((id: any) => {

			//     messageId = id.id
			// })

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

			// console.log(elem);
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

			// console.log(elem);
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
					setSmileBlock(true);

					setMediaBlock(false);
					setImagesBlock(false);
				}
				break;
			case 'media':
				if (mediaBlock) {
					setMediaBlock(false);
				} else {
					setSmileBlock(false);
					setMediaBlock(true);
					setImagesBlock(false);
				}
				break;
			case 'images':
				if (imagesBlock) {
					setImagesBlock(false);
				} else {
					setSmileBlock(false);
					setMediaBlock(false);
					setImagesBlock(true);
				}
				break;
			default:
				break;
		}
	};

	useEffect(() => {
		document.addEventListener('keydown', handleKeyPress, false);
		return () => {
			document.removeEventListener('keydown', handleKeyPress, false);
		};
	});

	return (
		<>
			<div className='inputBlock'>
				{!mediaBlock && !imagesBlock && (
					<div className='inputWrapper'>
						<div className='input'>
							<TextareaAutosize placeholder='Напишите сообщение...' value={areaValue} minRows={2} maxRows={4} onChange={resizeArea} />
							<div className={`sendBtn ${sendBtn ? 'activeSendBtn' : ''}`}>
								<button onClick={() => handleKeyPress({ code: 'Enter' })}>
									<SVGIcon name='sendTgBtn' size={20} />
								</button>
							</div>
						</div>
					</div>
				)}

				{smileBlock && <ChatSmiles addSmile={handleSmile} />}
				{imagesBlock && <ChatGifs addGif={handleGif} />}
				{mediaBlock && <AddPhoto addPhoto={handlePhoto} />}

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
						<button>
							<SVGIcon size={20} name='voiceMessageBtn' />
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default EnterMessage;
