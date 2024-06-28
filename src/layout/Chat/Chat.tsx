import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import chatBg from '../../assets/images/chatBg.png';
import SVGIcon from '../../assets/icons/svgComponent';
import { IMessages } from '../../model/MessagesModel';
import 'keen-slider/keen-slider.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { setChatId } from '../../store/rootSlice';
import './Chat.scss';
import { messagesData } from '../../Data/MessagesData';
import { Link, useParams, useLocation } from 'react-router-dom';
import userAvatar from '../../assets/avatar/user-avatar.png';
import EnterMessage from '../../components/EnterMessage/EnterMessage';
import { mobileScreenEnable } from '../../store/selectors';
import { protectModalState, reportUserAvatar, reportUserName } from '../../store/ProtectSlice';
import ProfileComponent from '../../components/ProfileComponent/ProfileComponent';
import { setVideoChatModal, setUserName, setUserAvatar } from '../../store/VideoChatSlice';
import Report from '../../components/ReportComponent/Report';
import { setReportPage } from '../../store/ProtectSlice';
import Typing from '../../components/TypingElement/Typing';
import { setRerender } from '../../store/rootSlice';
import MessageSmile from '../../components/MessageSmile/MessageSmile';
import { setMessageSmile } from '../../store/rootSlice'; // {setMessageSmile}
import EmptyChat from '../../components/EmptyChat/EmptyChat';

const Chat = () => {
	const [chatData, setChatData] = useState({} as IMessages);
	const [mobileScreen, setMobileScreen] = useState(false);
	const mobileDimension = useSelector(mobileScreenEnable);
	const reportComponent = useSelector((state: any) => state.ProtectState.reportComponent);
	const typingState = useSelector((state: any) => state.mainState.typingState);
	const [pathLocation, setPathLocation] = useState('');
	const [forceUpdate, setForceUpdate] = useState(false);
	const [selectedMessage, setSelectedMessage] = useState<number | null>(null);
	const chatSmile = useSelector((state: any) => state.mainState.messageSmile);
	const [chatLength, setChatLength] = useState<boolean | undefined>(false);

	const [scrollPosition, setScrollPosition] = useState(0);

	const location = useLocation();

	const dispatch = useDispatch();

	let { id }: any = useParams();

	const windowRef = useRef<HTMLDivElement>(null);

	const chatRef = useRef<HTMLDivElement>(null);

	const forceRerender = useCallback(() => {
		setForceUpdate((prevForceUpdate) => !prevForceUpdate);
		
		dispatch(setRerender());
	}, [dispatch]);

	const checkMobileScreen = useMemo(() => {
		return mobileDimension;
	}, [mobileDimension]);

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


	const scrollToBottom = () => {

		
		const lastChild = chatRef.current?.lastChild as Element | null;
		if (lastChild && lastChild.classList.contains('owner')) {
			lastChild.scrollIntoView({ block: 'end', behavior: 'smooth' });
		} else if (lastChild && scrollPosition > -15) {
			lastChild.scrollIntoView({ block: 'end', behavior: 'smooth' });

			
		}
	};




	
	

	useEffect(() => {

		
			
		const currentWindowRef = windowRef.current;
		currentWindowRef?.addEventListener('scroll', handleScroll);

		if(chatData.messages) {
			scrollToBottom()
		}
		// 
		
		if (pathLocation === '') {
			setPathLocation(location.pathname);
		} else if (pathLocation !== location.pathname) {
			setPathLocation(location.pathname);
			dispatch(setReportPage(false));
		}

		dispatch(setChatId(id));
		messagesData.forEach((item: IMessages) => {
			if (item.id.toString() === id) {
				setChatData(item);
			}
		});

		if (chatData.messages) {
			setChatLength(chatData.messages.length ? true : false);
		}
		
		checkMobileScreen ? setMobileScreen(true) : setMobileScreen(false);

		return () => {
			// windowRef.current?.removeEventListener('scroll', handleScroll);
			currentWindowRef?.removeEventListener('scroll', handleScroll as EventListener);
			dispatch(setReportPage(false));
		};
	}, [id, dispatch, checkMobileScreen, mobileDimension, pathLocation, location.pathname, forceUpdate, chatData.messages, typingState]);

	useEffect(() => {
		if (chatRef.current) {
			chatRef.current.scrollTop = chatRef.current.scrollHeight;
		}
	}, [chatData.messages]);

	return (
		<>
			{!mobileScreen ? (
				<div className='page Chat'>
					<div className='chatWrapper'>
						{!reportComponent ? (
							<div className='chatArea'>
								<div className='chatBg'>
									{
										chatLength ? 
										<img src={chatBg} alt='bg' />
										:
										null
									}
								</div>
								<div className='chatItems'>
									{
										chatLength ? 
										<div className='topBlock'>
										<div className='companionAvatar'>
											<img src={chatData.image} alt='avatar' />
											{chatData.userOnLine ? <div className='onLinePin'></div> : null}
										</div>
										<div className='companionDescription'>
											<div className='avatars'>
												<div className='avatar'>
													<img src={userAvatar} alt='avatar' />
												</div>
												<div className='avatar rightAvatar'>
													<img src={chatData.image} alt='avatar' />
												</div>
											</div>
											<div className='info'>
												<span>Вы и {chatData.userName} образовали пару</span>
											</div>
											<div className='date'>
												<SVGIcon name='calendarIcon' size={14} />
												<span>{chatData.dateMet}</span>
											</div>
										</div>
										<div className='buttonsBlock'>
											<button
												onClick={() => {
													dispatch(setVideoChatModal(true));
													dispatch(setUserName(chatData.userName));
													dispatch(setUserAvatar(chatData.image));
												}}
											>
												<SVGIcon name='videoCallIcon' size={20} />
											</button>
											<button
												onClick={() => {
													dispatch(protectModalState(true));
													dispatch(reportUserAvatar(chatData.image));
													dispatch(reportUserName(chatData.userName));
												}}
											>
												<SVGIcon name='protectIcon' size={20} stroke={'#fff'} />
											</button>
											<Link to={'/messages'}>
												<button>
													<SVGIcon name='roundCloseBtn' size={20} />
												</button>
											</Link>
										</div>
										</div>
										:
										null

									}
									{/* <div className='topBlock'>
										<div className='companionAvatar'>
											<img src={chatData.image} alt='avatar' />
											{chatData.userOnLine ? <div className='onLinePin'></div> : null}
										</div>
										<div className='companionDescription'>
											<div className='avatars'>
												<div className='avatar'>
													<img src={userAvatar} alt='avatar' />
												</div>
												<div className='avatar rightAvatar'>
													<img src={chatData.image} alt='avatar' />
												</div>
											</div>
											<div className='info'>
												<span>Вы и {chatData.userName} образовали пару</span>
											</div>
											<div className='date'>
												<SVGIcon name='calendarIcon' size={14} />
												<span>13.11.2023</span>
											</div>
										</div>
										<div className='buttonsBlock'>
											<button
												onClick={() => {
													dispatch(setVideoChatModal(true));
													dispatch(setUserName(chatData.userName));
													dispatch(setUserAvatar(chatData.image));
												}}
											>
												<SVGIcon name='videoCallIcon' size={20} />
											</button>
											<button
												onClick={() => {
													dispatch(protectModalState(true));
													dispatch(reportUserAvatar(chatData.image));
													dispatch(reportUserName(chatData.userName));
												}}
											>
												<SVGIcon name='protectIcon' size={20} stroke={'#fff'} />
											</button>
											<Link to={'/messages'}>
												<button>
													<SVGIcon name='roundCloseBtn' size={20} />
												</button>
											</Link>
										</div>
									</div> */}
									<div className='chat'>
										<div className='wrapper' ref={windowRef} >
											{chatLength ? 
												<div className='messages'  ref={chatRef}>
												{
												Object.keys(chatData).length > 0

													? 
													
													chatData.messages.map((item, index) => (
														
														<div className={`message ${item.owner ? 'owner' : 'notOwner'}`} key={item.id} onClick={() => handleSmileReaction(item.id)} >

																

															<div className="messageWrapper">
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
																{item.storagePhotoArr ? item.storagePhotoArr.map((elem: string, index) => <img src={elem} alt='message' key={index} />) : null}
																
																
																<span key={index}>{item.text}</span>

																
															</div>
															<div className='timeSend'key={item.id} style={{ left: item.owner ? '' : '15px' }}>
																	<span>{item.time}</span>
															</div>
															{
																item.owner &&
																<div className="readOwnerMsg">
																	<SVGIcon name='readOwnerMessage' size={20} stroke='#43A1FC'/>
																</div>
															}
															

														</div>
													  ))
													: 
													
														null
													}
													{typingState && <Typing key={Date.now()} userId={chatData.id} userName={chatData.userName} userAvatar={chatData.image} />}

												</div>
												: 
												<EmptyChat />
											}
										
										</div>
									</div>

									<EnterMessage forceRerender={forceRerender} chatId={id} />
								</div>
							</div>
						) : (
							<Report />
						)}

						<ProfileComponent />
					</div>
				</div>
			) : null}
		</>
	);
};

export default Chat;
