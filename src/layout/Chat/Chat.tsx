import React, { useCallback, useEffect, useMemo, useState } from 'react';
import chatBg from '../../assets/images/chatBg.png';
import SVGIcon from '../../assets/icons/svgComponent';
import { IMessages } from '../../model/MessagesModel';
import { Link } from 'react-router-dom';
import 'keen-slider/keen-slider.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { setChatId } from '../../store/rootSlice';
import './Chat.scss';
import { messagesData } from '../../Data/MessagesData';
import { useParams } from 'react-router-dom';
import userAvatar from '../../assets/avatar/user-avatar.png';
import EnterMessage from '../../components/EnterMessage/EnterMessage';
import { mobileScreenEnable } from '../../store/selectors';
import { protectModalState, reportUserAvatar, reportUserName } from '../../store/ProtectSlice';
import ProfileComponent from '../../components/ProfileComponent/ProfileComponent';
import { setVideoChatModal, setUserName, setUserAvatar } from '../../store/VideoChatSlice';
import Report from '../../components/ReportComponent/Report';
import { useLocation } from 'react-router-dom';
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

	const location = useLocation();

	const dispatch = useDispatch();

	let { id }: any = useParams();

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

	useEffect(() => {
		
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

		// if(chatData.messages.length !== undefined) {
		// 	// setChatLength(!chatData.messages.length ? true : false);
		// 	console.log('1');
			
			

		// }
		if (chatData.messages) {
			setChatLength(chatData.messages.length ? true : false);
		}
		// console.log(chatData.messages);
		
		


		checkMobileScreen ? setMobileScreen(true) : setMobileScreen(false);

		return () => {
			dispatch(setReportPage(false));
		};
	}, [id, dispatch, checkMobileScreen, mobileDimension, pathLocation, location.pathname, forceUpdate, chatData.messages]);

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
										<div className='wrapper' >
											{typingState && <Typing key={chatData.id} userId={chatData.id} userName={chatData.userName} userAvatar={chatData.image} />}
											{chatLength ? 
												<div className='messages'>
												{
													// chatLength
												Object.keys(chatData).length > 0
												// chatData.messages.length > 0
												// chatData.messages.length
													? chatData.messages.map((item, index) => (
														// console.log(chatData.messages.length),
														
															<>
																<div className={`message ${item.owner ? 'owner' : 'notOwner'}`} key={index} onClick={(event) => handleSmileReaction(item.id)}>
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

																	<span key={index}>{item.text}</span>

																	{item.imageUrl ? <img src={item.imageUrl} alt='message' /> : null}
																	{item.storagePhotoArr ? item.storagePhotoArr.map((elem: string) => <img src={elem} alt='message' />) : null}

																	<div className='timeSend' style={{ left: item.owner ? '' : '15px' }}>
																		<span>{item.time}</span>
																	</div>
																</div>
															</>
													  ))
													: 
													<>
														null
													</>}
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
