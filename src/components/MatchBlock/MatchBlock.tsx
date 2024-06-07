import React, { useEffect, useState } from 'react';
import './MatchBlock.scss';

import { sliderProfiles }  from "../../Data/SliderProfiles";
import { ISliderProfile } from "../../model/SliderProfileModel";

import SVGIcon from "../../assets/icons/svgComponent";
import PhotoSlider from '../ProfileComponent/PhotoSlider/PhotoSlider';

const MatchBlock = (props: any) => {
	return (
		<>
			<div className='MatchBlock'>
				{
					<div className="MatchBlockBlockWrapper">
						{
							sliderProfiles && sliderProfiles.map((sliderProfile: ISliderProfile, i) => {
								return (
									i === 0 &&
									<PhotoSlider images={sliderProfile.images} key={i} />
								)
							})
						}
						{
							<div className="MatchBlockToggler" onClick={() => props.sendDataToGamepad(false)}>
								<SVGIcon name="darkRoundCloseBtn" size={68} />
							</div>
						}
						<div className="MatchBlockHeartBlock">
							<SVGIcon name="bigMatchIcon" size={453} />
						</div>
					</div>
				}
			</div>
		</>
	);
};

export default MatchBlock;
