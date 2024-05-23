import React, { useState } from 'react';
import './GamePad.scss';
// import { useState } from 'react';
import 'keen-slider/keen-slider.min.css';

import { sliderProfiles }  from "../../Data/SliderProfiles";
import { ISliderProfile } from "../../model/SliderProfileModel";

import SVGIcon from "../../assets/icons/svgComponent";
import ProfileComponent from '../ProfileComponent/ProfileComponent';
import PhotoSlider from '../ProfileComponent/PhotoSlider/PhotoSlider';

const GamePad = () => {

	const [profileVisibility] = useState(false); // TODO add setProfileVisibility

	return (
		<>
			<div className='GamePad'>
				<div className="GamePadBlock">

					{
						profileVisibility
						?
						<ProfileComponent />
						:
						<div className="GamePadBlockWrapper">
							{
								sliderProfiles && sliderProfiles.map((sliderProfile: ISliderProfile) => {
									return (
										<div className="GamePadBlockItem" key={sliderProfile.id}>
											<PhotoSlider images={sliderProfile.images} />

											<div className="GamePadPanel">
												<div className="GamePadPanelBackground">
													<p>
														{sliderProfile.userDescription}
													</p>
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
										</div>
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
