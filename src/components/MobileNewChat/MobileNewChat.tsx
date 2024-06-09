import React, { useCallback, useEffect, useState } from 'react';
import './MobileNewChat.scss';
import SVGIcon from '../../assets/icons/svgComponent';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { mobileNewChatState } from '../../store/rootSlice';
import { setUserAvatar, setUserName, setVideoChatModal } from '../../store/VideoChatSlice';
import { protectModalState, reportUserAvatar, reportUserName } from '../../store/ProtectSlice';
import EnterMessage from '../EnterMessage/EnterMessage';
import ToggleBtn from '../ToggleBtn/ToggleBtn';
import { IPairs } from '../../model/PairsModel';
import { pairData } from '../../Data/PairData';
import { setNewChatId } from '../../store/rootSlice';

const MobileNewChat = () => {
	const [chatData, setChatData] = useState({} as IPairs);
	const newChatId = useSelector((state: any) => state.mainState.newChatId);
	const forceRerender = useCallback(() => {
		setForceUpdate((prevForceUpdate) => !prevForceUpdate);
	}, []);

	const dispatch = useDispatch();

	useEffect(() => {
		const filteredMessage = pairData.filter((elem: IPairs) => elem.id.toString() === newChatId);
		setChatData(filteredMessage[0]);
	}, [newChatId, forceRerender]);

	return (
		<>
			<div className='MobileNewChat'>
				<div className='container'>
					<div className='chatHeader'>
						<div
							className='backBtn'
							onClick={() => {
								dispatch(mobileNewChatState('mobileNewChat-close'));
								dispatch(setNewChatId(''));
							}}
						>
							<Link to='/messages'>
								<SVGIcon name='arrowLeft' size={30} />
							</Link>
						</div>
						<div className='userAvatar'>
							<div className='wrapper'>
								<img src={chatData.image} alt='user' />
								{
									// chatData.userOnLine ? <div className="onLinePin"></div> : null
								}
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
					<div className='chatArea'>
						<div className='addNotification'>
							<div className='tittleNote'>
								<h4>Узнай, когда Валюха ответит</h4>
								<span>Включить Push уведосления</span>
							</div>
							<ToggleBtn />
						</div>
						<div className='emptyChat'>
							<div className='tittle'>
								<h2>{`Ты и ${chatData.userName} образовали пару`}</h2>
							</div>
							<span className='subText'>2 недели назад</span>
							<div className='userAvatar'>
								<div className='imageContainer'>
									<div className='imageBorder'></div>
									<img src={chatData.image} alt='avatar' />
								</div>
							</div>
							<span className='subText'>
								{`
                                            Узнай, когда ${chatData.userName} прочитает ваши сообщения.
                                        `}
							</span>
							<div className='showedNote'>
								<SVGIcon name='showedIcon' size={20} />
								<span>Получить уведомление “Просмотрено”</span>
							</div>
						</div>
					</div>
					<EnterMessage forceRerender={forceRerender} chatId='2' />
				</div>
			</div>
		</>
	);
};

export default MobileNewChat;

function setForceUpdate(arg0: (prevForceUpdate: any) => boolean) {
	throw new Error('Function not implemented.');
}
