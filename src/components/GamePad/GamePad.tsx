import React, { useEffect, useState } from 'react';
import './GamePad.scss';
// import { useState } from 'react';
// import 'keen-slider/keen-slider.min.css';

import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

import { sliderProfiles }  from "../../Data/SliderProfiles";
import { ISliderProfile } from "../../model/SliderProfileModel";

import SVGIcon from "../../assets/icons/svgComponent";
import ProfileComponent from '../ProfileComponent/ProfileComponent';
import PhotoSlider from '../ProfileComponent/PhotoSlider/PhotoSlider';

const GamePad = () => {

	// TODO add logic for animated div
	// Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
	const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
		console.log(index, down, mx, xDir, velocity);
	})

	const [timeOut, setTimeOut] = useState(true);

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
											className="GamePadBlockItem"
											key={sliderProfile.id}
											{...bind(i)}
										>
											<PhotoSlider images={sliderProfile.images} />

											<div className="GamePadPanel">
												<div className="GamePadPanelBackground">
													<div className="GamePadPanelInfo">
														{
															sliderProfile.userDescription &&
															<div className="GamePadPanelInfoItem">
																{sliderProfile.userDescription}
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
