import React, { useCallback, useEffect, useState } from 'react';
import './GamePad.scss';
import './MediaGamePad.scss';

import { animated } from '@react-spring/web';

import { useDrag } from '@use-gesture/react';

import { sliderProfiles } from '../../Data/SliderProfiles';
import { ISliderProfile } from '../../model/SliderProfileModel';

import SVGIcon from '../../assets/icons/svgComponent';
import ProfileComponent from '../ProfileComponent/ProfileComponent';
import MatchBlock from '../MatchBlock/MatchBlock';
import PhotoSlider from '../ProfileComponent/PhotoSlider/PhotoSlider';
import { reportUserAge, reportUserAvatar, reportUserName, reportUserVerified, setDotsModal } from '../../store/ProtectSlice';
import { useDispatch } from 'react-redux';

const GamePad = () => {
	const dispatch = useDispatch();

	const [profileVisibility, setProfileVisibility] = useState(false); // logic for setProfileVisibility

	const [matchBlockVisibility, setMatchBlockVisibility] = useState(true);

	const handleProfileVisibility = useCallback((data: boolean) => {
		setProfileVisibility(data);

		if (data) {
			document.body.classList.add('profileOpened');
		} else {
			document.body.classList.remove('profileOpened');
		}
	}, []);

	function handleMatchBlockVisibility(data: boolean) {
		setMatchBlockVisibility(data);
	}

	const [verified] = useState(true);
	const [zodiac] = useState(false);

	const [approved, setApproved] = useState('');
	const [angle, setAngle] = useState(0);
	const [superLike, setSuperLike] = useState(false);

	const [timeOut, setTimeOut] = useState(true);

	// logic for animated div
	const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
		const maxAngle = 15;
		let newAngle = 0;

		if (down) {
			if (mx > 0) {
				newAngle = (mx / 360) * maxAngle < maxAngle ? (mx / 360) * maxAngle : maxAngle;
				setApproved('approved');

				setAngle(newAngle);
			} else if (mx < 0) {
				newAngle = (mx / 360) * maxAngle > -maxAngle ? (mx / 360) * maxAngle : -maxAngle;
				setApproved('declined');

				setAngle(newAngle);
			} else {
				resetPosition();
			}
		} else {
			resetPosition();
		}
	});

	const resetPosition = useCallback(() => {
		setAngle(0);
		setApproved('');
	}, []);

	// survey logic for disable in 3s
	setTimeout(() => {
		setTimeOut(false);
	}, 3000);

	const handleApprove = useCallback(() => {
		setApproved('approved');
		setAngle(15);

		setTimeout(() => {
			resetPosition();
		}, 1000);
	}, [resetPosition]);

	const handleDecline = useCallback(() => {
		setApproved('declined');
		setAngle(-15);

		setTimeout(() => {
			resetPosition();
		}, 1000);
	}, [resetPosition]);

	// logic for key press
	const handleKeyPress = useCallback(
		(event: any) => {
			// TODO add key bindings here
			if (event.code === 'ArrowUp') {
				// event.preventDefault();
				handleProfileVisibility(true);
			}

			if (event.code === 'ArrowDown') {
				// event.preventDefault();
				handleProfileVisibility(false);
			}

			if (event.code === 'ArrowLeft') {
				// event.preventDefault();
				handleDecline();
			}

			if (event.code === 'ArrowRight') {
				// event.preventDefault();
				handleApprove();
			}

			if (event.code === 'Enter') {
				// event.preventDefault();
				setSuperLike(true);

				setTimeout(() => {
					setSuperLike(false);
				}, 1000);
			}
		},
		[handleDecline, handleApprove, handleProfileVisibility, setSuperLike]
	);

	useEffect(() => {
		document.addEventListener('keydown', handleKeyPress, false);
		document.addEventListener('mouseup', resetPosition, false);

		return () => {
			document.removeEventListener('keydown', handleKeyPress, false);
			document.removeEventListener('mouseup', resetPosition, false);
		};
	}, [handleKeyPress, resetPosition]);

	return (
		<>
			<div className='GamePad'>
				<div className='GamePadBlock'>
					{!matchBlockVisibility && timeOut && (
						<div className='GamePadSurvey'>
							<SVGIcon name='surveyImage' />
						</div>
					)}

					{profileVisibility ? (
						<ProfileComponent profileVisibility={profileVisibility} sendDataToGamepad={handleProfileVisibility} />
					) : (
						<div className='GamePadBlockWrapper'>
							{!matchBlockVisibility &&
								sliderProfiles &&
								sliderProfiles.map((sliderProfile: ISliderProfile, i) => {
									return (
										<animated.div className={`GamePadBlockItem`} key={sliderProfile.id} {...bind(i)}>
											{i === 0 && (
												<>
													<div
														className="mobileDotsMenu"
														onClick={() => {
															dispatch(setDotsModal(true));
															dispatch(reportUserAvatar(sliderProfile.images[0].src));
															dispatch(reportUserName(sliderProfile.userName));
															dispatch(reportUserAge(sliderProfile.userAge));
															dispatch(reportUserVerified(verified));
														}}
													>
														<SVGIcon name='threeDots' />
													</div>
													<PhotoSlider
														images={sliderProfile.images}
														cssClass={approved}
														cssStyle={{
															transform: i === 0 ? `rotate(${angle}deg)` : `translateX(-50%)`
														}}
														sliderIndex={i}
													/>
												</>
											)}

											{i > 0 && <img src={sliderProfile.images[0].src} alt={sliderProfile.images[0].alt} />}

											{i === 0 && <div className='GamePadMatchBlock'>{superLike && <SVGIcon name='bigMatchIcon' />}</div>}

											{i === 0 && (
												<div className='GamePadPanel'>
													<div className='GamePadPanelBackground'>
														<div className='GamePadPanelInfo'>
															{(sliderProfile.userName || sliderProfile.userAge) && (
																<div className='GamePadPanelMainInfo'>
																	{sliderProfile.userName && <span className='name'>{sliderProfile.userName}</span>}
																	{sliderProfile.userName && sliderProfile.userAge && <span className='separator'>, </span>}
																	{sliderProfile.userAge && <span className='age'>{sliderProfile.userAge}</span>}
																	{verified && <SVGIcon className='verified' name='fillVerification' size={16} />}
																</div>
															)}
															{!zodiac && (
																<>
																	{sliderProfile.userLocation && sliderProfile.userDistance && (
																		<div className='GamePadPanelAdditionalInfo'>
																			<ul>
																				<li>
																					<SVGIcon name='homeIcon' size={14} />
																					<span>{sliderProfile.userLocation}</span>
																				</li>
																				<li>
																					<SVGIcon name='distanceIcon' size={14} />
																					<span>{sliderProfile.userDistance}</span>
																				</li>
																			</ul>
																		</div>
																	)}
																	{sliderProfile.userDescription && (
																		<div className='GamePadPanelDescription'>
																			<p>{sliderProfile.userDescription}</p>
																		</div>
																	)}
																</>
															)}
															{zodiac && (
																<>
																	<div className='GamePadPanelAdditionalInfo'>
																		<ul className='GamePadPanelLabelsList'>
																			<li>
																				<div className='tag'>
																					<svg width='16' height='16' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
																						<path
																							d='M12.064 11.7307C11.3473 11.2864 10.6007 10.9369 9.84157 10.6865V3.32941C10.6012 3.07712 11.3483 2.72487 12.0655 2.2772C13.2643 1.52893 13.9612 0.77985 13.9903 0.748317L13.1869 0.00585264C13.1806 0.0126898 12.5409 0.695835 11.4576 1.36703C10.4746 1.97606 8.90979 2.70206 7.03711 2.70206C5.16203 2.70206 3.57432 1.97447 2.57259 1.3641C1.46858 0.691432 0.808678 0.00683719 0.802169 0L0.00976562 0.754224C0.0396305 0.785648 0.75543 1.53263 1.9725 2.27944C2.67895 2.71292 3.41108 3.05707 4.15302 3.30726V10.7085C3.4116 10.9568 2.67999 11.2983 1.97398 11.7285C0.756879 12.47 0.0409706 13.2118 0.0111057 13.243L0.800801 14C0.807338 13.9932 1.46721 13.3135 2.57122 12.6457C3.57317 12.0395 5.16132 11.3169 7.03711 11.3169C8.91051 11.3169 10.4758 12.0379 11.4589 12.6428C12.5422 13.3092 13.1819 13.9874 13.1877 13.9936L13.989 13.2489C13.9599 13.2176 13.2628 12.4736 12.064 11.7307ZM5.24697 10.4116V3.60613C5.84501 3.73174 6.44441 3.79598 7.03711 3.79598C7.60504 3.79598 8.17756 3.73691 8.74761 3.6215V10.3963C8.17753 10.2816 7.60504 10.2229 7.03711 10.2229C6.44444 10.223 5.84504 10.2868 5.24697 10.4116Z'
																							fill='#7F7F7F'
																						></path>
																					</svg>
																					<span>Близнецы</span>
																				</div>
																			</li>
																		</ul>
																	</div>
																</>
															)}
														</div>
													</div>
													<div className='GamePadPanelButtons'>
														<div className={`GamePadPanelButtonsItem item-big ${approved === 'declined' ? 'declined' : ''}`} onClick={() => handleDecline()}>
															<SVGIcon name='gamepadNoIcon' size={24} />
														</div>
														<div className='GamePadPanelButtonsItem'>
															<SVGIcon name='gamepadRebootIcon' size={16} />
														</div>
														<div className='GamePadPanelButtonsItem'>
															<SVGIcon name='gamepadStarIcon' size={16} />
														</div>
														<div className='GamePadPanelButtonsItem'>
															<SVGIcon name='gamepadBoltIcon' size={16} />
														</div>
														<div
															className={`GamePadPanelButtonsItem item-big ${approved === 'approved' ? 'approved' : ''} ${
																approved === 'declined' ? 'upside-down' : 'item-pink'
															}`}
															onClick={() => handleApprove()}
														>
															<SVGIcon name='gamepadHeartIcon' size={24} />
														</div>
													</div>
													<div className='GamePadProfileToggler' onClick={() => handleProfileVisibility(true)}>
														<SVGIcon name='arrowUp' size={6} width={11} />
													</div>
												</div>
											)}
										</animated.div>
									);
								})}
						</div>
					)}

					{!profileVisibility && matchBlockVisibility && <MatchBlock sendDataToGamepad={handleMatchBlockVisibility} />}
				</div>

				<div className='GamePadTutorial'>
					<ul>
						<li>
							<span>
								<SVGIcon name='noBtn' width={21} size={19} />
								<span className='text'>Неа</span>
							</span>
						</li>
						<li>
							<span>
								<SVGIcon name='likeBtn' width={21} size={19} />
								<span className='text'>Лайк</span>
							</span>
						</li>
						<li>
							<span>
								<SVGIcon name='openProfile' width={21} size={19} />
								<span className='text'>Открыть профиль</span>
							</span>
						</li>
						<li>
							<span>
								<SVGIcon name='closeProfile' width={21} size={19} />
								<span className='text'>Закрыть профиль</span>
							</span>
						</li>
						<li>
							<span>
								<SVGIcon name='superLikeBtn' width={41} size={19} />
								<span className='text'>Суперлайк</span>
							</span>
						</li>
						<li>
							<span>
								<SVGIcon name='swipeBtn' width={61} size={19} />
								<span className='text'>Свайп фото</span>
							</span>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default GamePad;
