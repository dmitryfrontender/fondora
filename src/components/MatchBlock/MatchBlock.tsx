import React, { useState } from 'react';
import './MatchBlock.scss';

import { sliderProfiles } from '../../Data/SliderProfiles';
import { ISliderProfile } from '../../model/SliderProfileModel';

import SVGIcon from '../../assets/icons/svgComponent';
import PhotoSlider from '../ProfileComponent/PhotoSlider/PhotoSlider';

import TextAreaAutosize from 'react-textarea-autosize';
import companionAvatar from '../../assets/avatar/companionAvatar.png';

const MatchBlock = (props: any) => {
	const [inputValue, setInputValue] = useState('');

	const updateTextAreaValue = (e: any) => {
		if (!inputValue.length) {
			setInputValue(e.target.getAttribute('data-value'));
		} else {
			setInputValue(inputValue + e.target.getAttribute('data-value'))
		}
	};

	return (
		<div className='MatchBlock'>
			{
				<div className='MatchBlockBlockWrapper'>
					{sliderProfiles &&
						sliderProfiles.map((sliderProfile: ISliderProfile, i) => {
							return i === 0 && <PhotoSlider images={sliderProfile.images} key={i} drag={false} />;
						})}
					{
						<div className='MatchBlockToggler' onClick={() => props.sendDataToGamepad(false)}>
							<SVGIcon name='darkRoundCloseBtn' size={68} />
						</div>
					}
					<div className='MatchBlockHeartBlock'>
						<SVGIcon name='bigMatchIcon' size={453} />
					</div>

					<div className='MatchBlockMessageBlock'>
						<div className='MatchBlockMessageBlockTop'>
							<span className='MatchBlockMessageIcon'>
								<div className='imageContainer'>
									<div className='imageBorder'></div>
									<img src={companionAvatar} alt='avatar' />
								</div>
							</span>
							<span className='MatchBlockMessageText'>
								<span className='MatchBlockMessageTitle'>Jessica Black ждет твоего сообщения! </span>
							</span>
						</div>
						<TextAreaAutosize placeholder='Напишите сообщение...' value={inputValue} minRows={1} maxRows={4} onChange={(e) => setInputValue(e.target.value)} />

						<div className='MatchBlockBtns'>
							<div className='MatchBlockBtnsItem' data-value='👋' onClick={updateTextAreaValue}>
								👋
							</div>
							<div className='MatchBlockBtnsItem' data-value='😍' onClick={updateTextAreaValue}>
								😍
							</div>
							<div className='MatchBlockBtnsItem' data-value='😉' onClick={updateTextAreaValue}>
								😉
							</div>
							<div className='MatchBlockBtnsItem' data-value='💋' onClick={updateTextAreaValue}>
								💋
							</div>
							<div className='MatchBlockBtnsItem' data-value='♥️' onClick={updateTextAreaValue}>
								♥️
							</div>
						</div>
					</div>
				</div>
			}
		</div>
	);
};

export default MatchBlock;
