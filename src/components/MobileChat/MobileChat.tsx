import React, { useEffect, useState, useCallback, useRef } from 'react';
import './MobileChat.scss';
import { mobileChatState } from '../../store/rootSlice';
import { useDispatch, useSelector } from 'react-redux';
import SVGIcon from '../../assets/icons/svgComponent';
import { setChatId } from '../../store/rootSlice';
import { Link } from 'react-router-dom';
import { messagesData } from '../../Data/MessagesData';
import { IMessages } from '../../model/MessagesModel';
import userImg from '../../assets/avatar/user-avatar.png';
import EnterMessage from '../EnterMessage/EnterMessage';
import { setVideoChatModal, setUserName, setUserAvatar } from '../../store/VideoChatSlice';
import { protectModalState, reportUserAvatar, reportUserName } from '../../store/ProtectSlice';
import Report from '../ReportComponent/Report';
import Typing from '../TypingElement/Typing';
import MessageSmile from '../MessageSmile/MessageSmile';
import { setMessageSmile } from '../../store/rootSlice';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import VoiceMessage from '../../assets/voiceMessage/serial.mp3';

const MobileChat = () => {
	const reportComponent = useSelector((state: any) => state.ProtectState.reportComponent);

	const chatId = useSelector((state: any) => state.mainState.chatId);

	const typingState = useSelector((state: any) => state.mainState.typingState);

	const [chatData, setChatData] = useState({} as IMessages);

	const [forceUpdate, setForceUpdate] = useState(false);
	const [selectedMessage, setSelectedMessage] = useState<number | null>(null);
	const chatSmile = useSelector((state: any) => state.mainState.messageSmile);
	const [scrollPosition, setScrollPosition] = useState(0);
	const [newMessagesLength, setNewMessagesLength] = useState<number>(0);
	const [isTyping, setIsTyping] = useState(false);



	const windowRef = useRef<HTMLDivElement>(null);

	const chatRef = useRef<HTMLDivElement>(null);


	const dispatch = useDispatch();

	const forceRerender = useCallback(() => {
		setForceUpdate((prevForceUpdate) => !prevForceUpdate);

	}, []);

	const handleSmileReaction = (messageId: number) => {


			setSelectedMessage(messageId);
			chatSmile ? dispatch(setMessageSmile(false)) : dispatch(setMessageSmile(true));


	};

	const handleAddReaction = (messageId: number, reaction: string) => {
		chatData.messages.forEach((message: any) => {
			if (message.id === messageId) {
				message.reaction = reaction;
				forceRerender();
			}
		});
	};


	const handleScroll = (e: any) => {
		const { scrollTop, scrollHeight, clientHeight } = e.target;
		const position = Math.ceil((scrollTop / (scrollHeight - clientHeight)) * 100);
		setScrollPosition(position);

	};

	const scrollToBottom = useCallback((scrollValue: number) => {


		const lastChild = chatRef.current?.lastChild as Element | null;

		if (lastChild && lastChild.classList.contains('owner')) {
			lastChild.scrollIntoView({ block: 'end', behavior: 'smooth' });
		} else if (lastChild && scrollValue > -15) {
			lastChild.scrollIntoView({ block: 'end', behavior: 'smooth' });
		}
	}, []);


	useEffect(() => {

		const currentWindowRef = windowRef.current;
		currentWindowRef?.addEventListener('scroll', handleScroll);

		if(chatData.messages){

			if (chatData.messages.length !== newMessagesLength) {
				setNewMessagesLength(chatData.messages.length);
				scrollToBottom(scrollPosition);
			}
		}

		if (typingState && !isTyping) {
			scrollToBottom(scrollPosition);
			setIsTyping(true);
		} else if (!typingState && isTyping) {
			setIsTyping(false);
		}

		const filteredMessage = messagesData.filter((msg: IMessages) => msg.id.toString() === chatId);
		setChatData(filteredMessage[0]);

		return () => {
			currentWindowRef?.removeEventListener('scroll', handleScroll);
		}
	}, [chatId, forceUpdate, chatData, typingState, scrollToBottom, isTyping, newMessagesLength, scrollPosition]);


	return (
		<>
			{
				<div className='MobileChat'>
					{!reportComponent ? (
						<>
							<div className='container'>
								<div className='chatHeader'>
									<div className="wrapper">
										<div
											className='backBtn'
											onClick={() => {
												dispatch(mobileChatState('mobileChat-close'));
												dispatch(setChatId(''));
											}}
										>
											<Link to='/messages'>
												<SVGIcon name='arrowLeft' size={30} />
											</Link>
										</div>
										<div className='userAvatar'>
											<div className='wrapper'>
												<img src={chatData.image} alt='user' />
												{chatData.userOnLine ? <div className='onLinePin'></div> : null}
											</div>
										</div>
										<div className='chatBtn'>
											<button
												onClick={() => {
													dispatch(setVideoChatModal(true));
													dispatch(setUserName(chatData.userName));
													dispatch(setUserAvatar(chatData.image));
												}}
											>
												<SVGIcon name='videoCallIcon' size={30} />
											</button>
											<button
												onClick={() => {
													dispatch(protectModalState(true));
													dispatch(reportUserAvatar(chatData.image));
													dispatch(reportUserName(chatData.userName));
												}}
											>
												<SVGIcon name='protectIcon' size={30} stroke='#fff' />
											</button>
										</div>

									</div>

								</div>
								<div className='chatArea'>
									<div className='background'>{/* <img src={chatBg} alt="bg" /> */}</div>
									<div className='metInfo'>
										<div className='avatars'>
											<img src={chatData.image} alt='avatar' />
											<img className='second' src={userImg} alt='avatar' />
										</div>
										<div className='information'>
											<span>Вы и {chatData.userName} образовали пару</span>
											<div className='date'>
												<SVGIcon name='calendarIcon' size={20} />
												<span>{chatData.dateMet}</span>
											</div>
										</div>
									</div>
									<div className='chatWrapper'ref={windowRef}>
										<div className="wrapper" ref={chatRef}>
											<div className='messages' >
												{Object.keys(chatData).length > 0
													? chatData.messages.map((item, index) => (
														// console.log(item),

																<div className={`message ${item.owner ? 'owner' : 'notOwner'}`} key={index} onClick={() => handleSmileReaction(item.id)}>
																	<div className="messageWrapper">
																		{/* <span key={index}>{item.text}</span> */}
																		{selectedMessage === item.id && chatSmile && (
																			<div className='smileBlock'>
																				<MessageSmile onSelect={(reaction) => handleAddReaction(item.id, reaction)} />
																			</div>
																		)}
																		{item.reaction && (
																			<div className='reaction'>
																				<span>{item.reaction}</span>
																			</div>
																		)}
																		{item.imageUrl ? <img src={item.imageUrl} alt='message' /> : null}
																		{/* {item.storagePhotoArr ? item.storagePhotoArr.forEach((elem: string) => <img src={elem} alt='message' />) : null} */}
															{item.storagePhotoArr ? item.storagePhotoArr.map((elem: string, index) => <img src={elem} alt='message' key={index} />) : null}

																		{/* {item.storagePhotoArr ? console.log(item.storagePhotoArr) : null}; */}


																		{

																		item.text.slice(-3) === 'mp3' ?


																		<AudioPlayer audioUrl={VoiceMessage}/>

																		:
																		<span key={index}>{item.text}</span>


																		}


																	</div>
																	<div className='timeSend' style={{ left: item.owner ? '' : '15px' }}>
																			<span>{item.time}</span>
																		</div>

																</div>
													))
													: null}
													{typingState && <Typing userName={chatData.userName} userAvatar={chatData.image} />}


											</div>
										</div>
									</div>

								</div>
								<EnterMessage forceRerender={forceRerender} chatId={chatId} />
							</div>
						</>
					) : (
						<Report />
					)}
				</div>
			}
		</>
	);
};

export default MobileChat;
