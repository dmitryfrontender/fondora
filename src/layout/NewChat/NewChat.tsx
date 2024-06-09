import React, { useEffect, useMemo, useState } from 'react';
import ProfileComponent from '../../components/ProfileComponent/ProfileComponent';
import EnterMessage from '../../components/EnterMessage/EnterMessage';
import { useParams } from 'react-router-dom';
import { pairData } from '../../Data/PairData';
import { IPairs } from '../../model/PairsModel';
import SVGIcon from '../../assets/icons/svgComponent';
import { setUserName, setVideoChatModal, setUserAvatar } from '../../store/VideoChatSlice';
import { protectModalState, reportUserAvatar, reportUserName } from '../../store/ProtectSlice';
import { useDispatch, useSelector } from 'react-redux';
import ToggleBtn from '../../components/ToggleBtn/ToggleBtn';
import './NewChat.scss';
import { mobileScreenEnable } from '../../store/selectors';

const NewChat = () => {
	let { id }: any = useParams();
	const [chatData, setChatData] = useState({} as IPairs);
	const dispatch = useDispatch();
	const mobileDimension = useSelector(mobileScreenEnable);
	const [mobileScreen, setMobileScreen] = useState(false);

	const checkMobileScreen = useMemo(() => {
		return mobileDimension;
	}, [mobileDimension]);

	useEffect(() => {
		pairData.forEach((item: any) => {
			if (item.id === +id) {
				setChatData(item);
			}
			// console.log(item.id, +id);
		});

		checkMobileScreen ? setMobileScreen(true) : setMobileScreen(false);
	}, [chatData, checkMobileScreen, id]);

	return (
		<>
			{!mobileScreen ? (
				<div className='page Chat NewChat'>
					<div className='chatWrapper'>
						<div className='chatArea'>
							<div className='chatItems'>
								<div className='top'>
									<div className='userAvatar'>
										<div className='imageContainer'>
											<div className='imageBorder'></div>
											<img src={chatData.image} alt='avatar' />
										</div>
									</div>
									<div className='btnGroup'>
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
									</div>
								</div>
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
								<div className='chat'></div>
							</div>
							<EnterMessage chatId={id} />
						</div>
						<ProfileComponent />
					</div>
				</div>
			) : null}
		</>
	);
};

export default NewChat;
