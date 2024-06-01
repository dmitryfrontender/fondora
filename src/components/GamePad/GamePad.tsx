import React, { useEffect, useState } from 'react';
import './GamePad.scss';

import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

import { sliderProfiles }  from "../../Data/SliderProfiles";
import { ISliderProfile } from "../../model/SliderProfileModel";

import SVGIcon from "../../assets/icons/svgComponent";
import ProfileComponent from '../ProfileComponent/ProfileComponent';
import PhotoSlider from '../ProfileComponent/PhotoSlider/PhotoSlider';

const GamePad = () => {

	const [approved, setApproved] = useState('');
	const [angle, setAngle] = useState(0);

	const [timeOut, setTimeOut] = useState(true);

	// TODO add logic for animated div
	// Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
	const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
		console.log(index, down, mx, xDir, velocity);

		const maxAngle = 15;
		let newAngle = 0;

		if (down) {
			if (mx > 0) {
				newAngle = mx / 360 * maxAngle < maxAngle ? mx / 360 * maxAngle : maxAngle;
				setApproved('approved');

				setAngle(newAngle);
			} else if (mx < 0) {
				newAngle = mx / 360 * maxAngle > -maxAngle ? mx / 360 * maxAngle : -maxAngle;
				setApproved('declined');

				setAngle(newAngle);
			} else {
				setAngle(0);
				setApproved('');
			}
		} else {
			setAngle(0);
			setApproved('');
		}
	})

	// TODO add logic for timeout
	setTimeout(() => {
		setTimeOut(false);
	}, 3000);

	const [profileVisibility, setProfileVisibility] = useState(false); // TODO add setProfileVisibility

	// TODO add logic for key press
    const handleKeyPress = (event: any) => {

		// TODO add key bindings here
        if (event.code === "ArrowUp") {
			event.preventDefault();
			setProfileVisibility(true);
        }

		if (event.code === "ArrowDown") {
			event.preventDefault();
			setProfileVisibility(false);
		}

		if (event.code === "ArrowLeft") {
			event.preventDefault();
			console.log('ArrowLeft');
		}

		if (event.code === "ArrowRight") {
			event.preventDefault();
			console.log('ArrowRight');
		}

		if (event.code === "Enter") {
			event.preventDefault();
			console.log('Enter');
		}
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress, false);
        return () => {
          document.removeEventListener("keydown", handleKeyPress, false);
        };
    }, []);

	return (
		<>
			<div className='GamePad'>
				<div className="GamePadBlock">
					{
						timeOut &&
						<div className="GamePadSurvey">
							<SVGIcon name="surveyImage" />
						</div>
					}

					{
						profileVisibility
						?
						<ProfileComponent />
						:
						<div className="GamePadBlockWrapper">
							{
								sliderProfiles && sliderProfiles.map((sliderProfile: ISliderProfile, i) => {
									return (
										<animated.div
											className={`GamePadBlockItem ${approved}`}
											style={{
												transform: i === 0 ? `rotate(${angle}deg)` : `translateX(-50%)`
											}}
											key={sliderProfile.id}
											{...bind(i)}
										>
											{
												i === 0 &&
												<PhotoSlider images={sliderProfile.images} />
											}

											{
												i > 0 &&
												<img src={sliderProfile.images[0].src} alt={sliderProfile.images[0].alt} />
											}

											<div className="GamePadPanel">
												<div className="GamePadPanelBackground">
													<div className="GamePadPanelInfo">
														{
															(sliderProfile.userName || sliderProfile.userAge) &&
															<div className="GamePadPanelMainInfo">
																{
																	sliderProfile.userName &&
																	<span className="name">
																		{sliderProfile.userName}
																	</span>
																}
																{
																	sliderProfile.userName &&
																	sliderProfile.userAge &&
																	<span className="separator">, </span>
																}
																{
																	sliderProfile.userAge &&
																	<span className="age">
																		{sliderProfile.userAge}
																	</span>
																}
																<SVGIcon name="fillVerification" size={16} />
															</div>
														}
														{
															sliderProfile.userLocation &&
															sliderProfile.userDistance &&
															<div className="GamePadPanelAdditionalInfo">
																<ul>
																	<li>
																		<SVGIcon name="homeIcon" size={14} />
																		<span>{sliderProfile.userLocation}</span>
																	</li>
																	<li>
																		<SVGIcon name="distanceIcon" size={14} />
																		<span>{sliderProfile.userDistance}</span>
																	</li>
																	<li>
																		<SVGIcon name="tall" size={14} />
																		<span>{sliderProfile.userLocation}</span>
																	</li>
																	<li>
																		<SVGIcon name="femaleGender" size={14} />
																		<span>{sliderProfile.userLocation}</span>
																	</li>
																</ul>
															</div>
														}
														{
															sliderProfile.userDescription &&
															<div className="GamePadPanelDescription">
																<p>
																	{sliderProfile.userDescription}
																</p>
															</div>
														}
													</div>
												</div>
												<div className="GamePadPanelButtons">
													<div className="GamePadPanelButtonsItem item-big">
														<SVGIcon name="gamepadNoIcon" size={24} />
													</div>
													<div className="GamePadPanelButtonsItem">
														<SVGIcon name="gamepadRebootIcon" size={16} />
													</div>
													<div className="GamePadPanelButtonsItem">
														<SVGIcon name="gamepadStarIcon" size={16} />
													</div>
													<div className="GamePadPanelButtonsItem">
														<SVGIcon name="gamepadBoltIcon" size={16} />
													</div>
													<div className="GamePadPanelButtonsItem item-big item-pink">
														<SVGIcon name="gamepadHeartIcon" size={24} />
													</div>
												</div>
												<div className="GamePadProfileToggler" onClick={() => setProfileVisibility(true)}>
													<SVGIcon name="arrowUp" size={6} width={11} />
												</div>
											</div>
										</animated.div>
									)
								})
							}
						</div>
					}
				</div>

				<div className="GamePadTutorial">
					<ul>
						<li>
							<button>
								<SVGIcon name="noBtn" width={21} size={19} />
								<span className="text">Неа</span>
							</button>
						</li>
						<li>
							<button>
								<SVGIcon name="likeBtn" width={21} size={19} />
								<span className="text">Лайк</span>
							</button>
						</li>
						<li>
							<button>
								<SVGIcon name="openProfile" width={21} size={19} />
								<span className="text">Открыть профиль</span>
							</button>
						</li>
						<li>
							<button>
								<SVGIcon name="closeProfile" width={21} size={19} />
								<span className="text">Закрыть профиль</span>
							</button>
						</li>
						<li>
							<button>
								<SVGIcon name="superLikeBtn" width={41} size={19} />
								<span className="text">Суперлайк</span>
							</button>
						</li>
						<li>
							<button>
								<SVGIcon name="swipeBtn" width={61} size={19} />
								<span className="text">Свайп фото</span>
							</button>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default GamePad;
