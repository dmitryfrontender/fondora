import React, { useEffect, useMemo, useState } from 'react';
import './Sidebar.scss';
// import userAvatar from '../../assets/avatar/user-avatar.png'
import userAvatar from '../../assets/avatar/user-avatar.png';
import MessageSidebar from '../../components/MessageSidebar/MessageSidebar';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { messagesData } from '../../Data/MessagesData';
import { MessageState, NewMessageState } from '../../store/rootSlice';
import MobileTop from '../../components/MobileTop/MobileTop';
import MobileButtons from '../../components/MobileButtons/MobileButtons';
import { mobileScreenEnable } from '../../store/selectors';
import SVGIcon from '../../assets/icons/svgComponent.jsx';

const Dashboard = () => {
	const location = useLocation();
	const path = location.pathname;
	const dispatch = useDispatch();
	const likeState = useSelector((state: any) => state.mainState.newLike);
	const messageState = useSelector((state: any) => state.mainState.isMessage);
	const notificationState = useSelector((state: any) => state.mainState.newNotification);
	const settingState = useSelector((state: any) => state.mainState.newSetting);
	const isNewMessage = useSelector((state: any) => state.mainState.newMessage);
	const chatId = useSelector((state: any) => state.mainState.chatId);
	const newChatId = useSelector((state: any) => state.mainState.newChatId);
	const [mobileScreen, setMobileScreen] = useState(false);
	const mobileDimension = useSelector(mobileScreenEnable);

	// const [newMessageState, setNewMessageState] = useState(false);

	// const valera = () => {
	//   // messagesData.forEach((item:IMessages) => {
	//   //   item.messages.forEach((message) => {
	//   //
	//   //   })

	// };

	const checkNewMessage = useMemo(() => {
		// return console.log(valera());
		// messagesData
		return messagesData.some((item) => item.newMessages);
		// console.log(item.newMessages);
		// return item.newMessages;

		// if (item.newMessages) {

		// } else {
		//   dispatch(NewMessageState("newMessage-false"));
		//   setNewMessageState(false);
		// }

		// return item.newMessages;

		// })
		// return messagesArr.length > 0;

		// valera()
	}, []);

	const checkPath = (path: string) => {
		switch (path) {
			case '/messages':
				return '/messages';
			case `/messages/chat/${chatId}`:
				return `/messages/chat/${chatId}`;
			case '/pairs':
				return '/pairs';
			case `/pairs/newChat/${newChatId}`:
				return `/pairs/newChat/${newChatId}`;

			default:
				return false;
		}
	};

	console.log(mobileScreen);
	

	const checkMobileScreen = useMemo(() => {
		return mobileDimension;
	}, [mobileDimension]);

	useEffect(() => {
		const checkMessages = () => {
			messagesData.length > 0 ? dispatch(MessageState('messages-true')) : dispatch(MessageState('messages-false'));
		};

		// checkMessages()
		// checkNewMessage()
		checkMessages();
		if (checkNewMessage) {
			dispatch(NewMessageState('newMessage-true'));
			// setNewMessageState(true);
		} else {
			dispatch(NewMessageState('newMessage-false'));
			// setNewMessageState(false);
		}

		checkMobileScreen ? setMobileScreen(true) : setMobileScreen(false);
		// console.log(checkMobileScreen, '2');
		// console.log(mobileScreen, '3');
	}, [likeState, messageState, notificationState, settingState, isNewMessage, dispatch, checkNewMessage, checkMobileScreen]);

	return (
		<>
			{
				// width <= 1023 ?
				// mobileScreen ?
				checkMobileScreen ? (
					<>
						<MobileTop />
						<MobileButtons />
						{checkPath(path) && messageState ? <MessageSidebar /> : null}
					</>
				) : (
					<>
						<aside className='Sidebar'>
							<SVGIcon name='mainLogo' className='main-logo' size={170} height={41} />

							{/* <Routes>

          <Route path="/messages" element={<MessageSidebar />} />

        </Routes> */}

							{checkPath(path) && messageState ? (
								<MessageSidebar />
							) : (
								<ul>
									<Link to='/'>
										<li>
											<div className='iconWrapper'>
												<SVGIcon name='menuIcon' className={`menu-icon ${path === '/' ? 'active-menu' : ''}`} size={30} />
											</div>
											<span>Главная</span>
										</li>
									</Link>

									<Link to='/likes'>
										<li>
											<div className='iconWrapper'>
												<SVGIcon name='heartIcon' className={`menu-icon ${path === '/likes' ? 'active-menu' : ''}`} size={30} />
												{likeState ? <div className='pinnedItem'></div> : null}
												{/* <div className="pinnedItem"></div> */}
											</div>
											<span>Лайки</span>
										</li>
									</Link>

									<Link to='/top-profiles'>
										<li>
											<div className='iconWrapper'>
												<SVGIcon name='topProfile' className={`menu-icon ${path === '/top-profiles' ? 'active-menu' : ''}`} />
											</div>
											<span>Топ-профили</span>
										</li>
									</Link>

									<Link to='/messages'>
										<li>
											<div className='iconWrapper'>
												<SVGIcon name='messageIcon' className={`menu-icon ${path === '/messages' ? 'active-menu' : ''}`} />
												{isNewMessage ? <div className='pinnedItem'></div> : null}
											</div>
											<span>Сообщения</span>
										</li>
									</Link>

									<Link to='/notifications'>
										<li>
											<div className='iconWrapper'>
												<SVGIcon name='notification' className={`menu-icon ${path === '/notifications' ? 'active-menu' : ''}`} />
												{notificationState ? <div className='pinnedItem'></div> : null}
											</div>
											<span>Уведомления</span>
										</li>
									</Link>

									<Link to='/settings'>
										<li>
											<div className='iconWrapper'>
												<SVGIcon name='settings' className={`menu-icon ${path === '/settings' ? 'active-menu' : ''}`} />
												{settingState ? <div className='pinnedItem'></div> : null}
											</div>
											<span>Настройки</span>
										</li>
									</Link>
								</ul>
							)}

							<Link to='/my-profile'>
								<div className='userBlock'>
									<div className='avatar'>
										<img src={userAvatar} alt='avatar' />
									</div>
									<div className='userInfo'>
										<p>Alex</p>
										<p>@pixelwizardalex</p>
									</div>
								</div>
							</Link>
						</aside>
					</>
				)
			}
		</>
	);
};

export default Dashboard;
