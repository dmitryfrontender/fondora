import React, { useEffect, useState } from 'react';
// import SettingsBtn from "../../components/SettingsBtn/SettingsBtn.tsx";
import './MyProfile.scss';
import SVGIcon from '../../assets/icons/svgComponent';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { boostModalState } from '../../store/BoostSlice';
import { setVerifyProfileModal } from '../../store/VerifyProfileSlice';
import { Tooltip as ReactTooltip } from 'react-tooltip';

const MyProfile = () => {
	const dispatch = useDispatch();
	const [showTooltip, setShowTooltip] = useState(false);

	const verifyProfileState = useSelector((state: any) => state.VerifyProfileState.isUserVerify);

	const showVerifyTooltip = () => {
		setTimeout(() => {
			setShowTooltip(true);
		}, 1000);

		setTimeout(() => {
			setShowTooltip(false);
		}, 5000);
	};

	useEffect(() => {
		if (!verifyProfileState) {
			showVerifyTooltip();
		}

		window.history.scrollRestoration = 'manual';
	}, [verifyProfileState]);

	return (
		<>
			<div className='page myProfile'>
				<div className='pageItems'>
					<div className='protect'>
						<SVGIcon name='protectIcon' size={24} stroke={'#fff'} />
					</div>
					<div className='userInfo'>
						<div className='userAvatar'>
							<div className='borderBg'></div>
							<div className='borderActive'></div>
							<Link to={'/my-profile/edit-profile'}>
								<div className='editBtn'>
									<SVGIcon name='editProfile' size={40} />
									<div className='markBtn'></div>
								</div>
							</Link>
							<div className='fillWrapper'>
								<div className='fillInfo'>
									<span>100% заполнено</span>
								</div>
							</div>
						</div>
						<div className='userTitle'>
							<div className='titleWrapper'>
								<div className='userName'>
									<h2>Alex, 41</h2>

									<SVGIcon
										onMouseOver={() => setShowTooltip(true)}
										onMouseLeave={() => setShowTooltip(false)}
										onClick={() => dispatch(setVerifyProfileModal(true))}
										data-tooltip-id='verifyTooltip'
										name='verifiedProfile'
										size={20}
										style={{ fill: verifyProfileState ? '#19FF75' : '#7F7F7F' }}
									/>
									<ReactTooltip
										id='verifyTooltip'
										place='top'
										content='Подтверди свой профиль'
										isOpen={showTooltip}
										className='customTooltip'
										classNameArrow="example-arrow"
									/>
								</div>
								<div className='userEmail'>
									<span>@pixelwizardalex</span>
								</div>
							</div>
						</div>
						<div className='mobileBg'>
							<SVGIcon name='mobileBg' size={270} />
						</div>
					</div>
					<div className='extraWrapper'>
						<div className='extraBlock'>
							<div className='extraItem likes'>
								<div className='wrapper'>
									<div className='picture'>
										<SVGIcon name='starIcon' size={25} />
									</div>
									<div className='description'>
										<span className='numberLike'>0</span>
										<span>Суперлайков</span>
									</div>
									<Link to={'/my-profile/super-likes'}>
										<div className='plusBtn'>
											<SVGIcon name='plusBtn' size={30} />
										</div>
									</Link>
								</div>
							</div>
							<div className='extraItem boost'>
								<div className='wrapper'>
									<div className='picture'>
										<SVGIcon name='lightningIcon' size={25} />
									</div>
									<div className='description'>
										<span className='numberLike'>0</span>
										<span>Бустов</span>
									</div>
									<div className='plusBtn' onClick={() => dispatch(boostModalState('open-boostModal'))}>
										<SVGIcon name='plusBtn' size={30} />
									</div>
								</div>
							</div>
							<div className='extraItem subscribe'>
								<div className='wrapper'>
									<div className='picture'>
										<SVGIcon name='subscribeIcon' size={25} />
									</div>
									<div className='description'>
										<span>Подписки</span>
									</div>
									<Link to={'/my-profile/subscriptions'}>
										<div className='plusBtn'>
											<SVGIcon name='plusBtn' size={30} />
										</div>
									</Link>
								</div>
							</div>
						</div>
						<div className='subscriptionsBlock'>
							<div className='subscription gold'>
								<div className='wrapper'>
									<div className='planTitle'>
										<div className='logo'>
											<SVGIcon name='logoGold' className='logo-effect' />
											<div className='status'>
												<span>GOLD</span>
											</div>
										</div>
										<div className='buyBtn'>
											<span>Купить подписку</span>
										</div>
									</div>
									<div className='planOptions top'>
										<div className='item first'>
											<h5>Что Входит</h5>
										</div>
										<div className='item'>
											<h5>Бесплатный</h5>
										</div>
										<div className='item'>
											<h5>Gold</h5>
										</div>
									</div>
									<div className='planOptions'>
										<div className='item first'>
											<span>Просмотр лайков</span>
										</div>
										<div className='item'>
											<SVGIcon name='freeGold' size={24} />
										</div>
										<div className='item gold'>
											<SVGIcon name='checkboxIcon' size={15} />
										</div>
									</div>
									<div className='planOptions'>
										<div className='item first'>
											<span>Топ-профили</span>
										</div>
										<div className='item'>
											<SVGIcon name='freeGold' size={24} />
										</div>
										<div className='item gold'>
											<SVGIcon name='checkboxIcon' size={15} />
										</div>
									</div>
									<div className='planOptions'>
										<div className='item first'>
											<span>5 бесплатных лайков</span>
										</div>
										<div className='item'>
											<SVGIcon name='freeGold' size={24} />
										</div>
										<div className='item gold'>
											<SVGIcon name='checkboxIcon' size={15} />
										</div>
									</div>
									<div className='watchMore'>
										<Link to={'/my-profile/gold-subscription'}>
											<div className='innerBlock'>
												<span>Смотреть все функции</span>
												<div className='underline'></div>
											</div>
										</Link>
									</div>
								</div>
							</div>
							<div className='subscription vip'>
								<div className='wrapper'>
									<div className='planTitle'>
										<div className='logo'>
											<SVGIcon name='logoVip' className='logo-effect' />
											<div className='status'>
												<span>VIP</span>
											</div>
										</div>
										<div className='buyBtn'>
											<span>Купить подписку</span>
										</div>
									</div>
									<div className='planOptions top'>
										<div className='item first'>
											<h5>Что Входит</h5>
										</div>
										<div className='item'>
											<h5>Бесплатный</h5>
										</div>
										<div className='item'>
											<h5>Gold</h5>
										</div>
									</div>
									<div className='planOptions'>
										<div className='item first'>
											<span>Приоритетные лайки</span>
										</div>
										<div className='item'>
											<SVGIcon name='freeGold' size={24} />
										</div>
										<div className='item gold'>
											<SVGIcon name='checkboxIcon' size={15} />
										</div>
									</div>
									<div className='planOptions'>
										<div className='item first'>
											<span>Сообщения до создания пары</span>
										</div>
										<div className='item'>
											<SVGIcon name='freeGold' size={24} />
										</div>
										<div className='item gold'>
											<SVGIcon name='checkboxIcon' size={15} />
										</div>
									</div>
									<div className='planOptions'>
										<div className='item first'>
											<span>Просмотр лайков</span>
										</div>
										<div className='item'>
											<SVGIcon name='freeGold' size={24} />
										</div>
										<div className='item gold'>
											<SVGIcon name='checkboxIcon' size={15} />
										</div>
									</div>
									<div className='watchMore'>
										<Link to={'/my-profile/vip-subscription'}>
											<div className='innerBlock'>
												<span>Смотреть все функции</span>
												<div className='underline'></div>
											</div>
										</Link>
									</div>
								</div>
							</div>
							<div className='subscription plus'>
								<div className='wrapper'>
									<div className='planTitle'>
										<div className='logo'>
											<SVGIcon name='logoPlus' className='logo-effect' />
											<div className='status'>
												<span>PLUS</span>
											</div>
										</div>
										<div className='buyBtn'>
											<span>Купить подписку</span>
										</div>
									</div>
									<div className='planOptions top'>
										<div className='item first'>
											<h5>Что Входит</h5>
										</div>
										<div className='item'>
											<h5>Бесплатный</h5>
										</div>
										<div className='item'>
											<h5>Gold</h5>
										</div>
									</div>
									<div className='planOptions'>
										<div className='item first'>
											<span>Безлимит лайков</span>
										</div>
										<div className='item'>
											<SVGIcon name='freePlus' size={24} />
										</div>
										<div className='item gold'>
											<SVGIcon name='checkboxIcon' size={15} />
										</div>
									</div>
									<div className='planOptions'>
										<div className='item first'>
											<span>Перемотка без ограничений</span>
										</div>
										<div className='item'>
											<SVGIcon name='freePlus' size={24} />
										</div>
										<div className='item gold'>
											<SVGIcon name='checkboxIcon' size={15} />
										</div>
									</div>
									<div className='planOptions'>
										<div className='item first'>
											<span>Загранпасторт</span>
										</div>
										<div className='item'>
											<SVGIcon name='freePlus' size={24} />
										</div>
										<div className='item gold'>
											<SVGIcon name='checkboxIcon' size={15} />
										</div>
									</div>
									<div className='watchMore'>
										<Link to={'/my-profile/plus-subscription'}>
											<div className='innerBlock'>
												<span>Смотреть все функции</span>
												<div className='underline'></div>
											</div>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MyProfile;
