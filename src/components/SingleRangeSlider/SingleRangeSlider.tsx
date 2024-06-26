import React, { useState } from 'react';
import './SingleRangeSlider.scss';

interface SingleRangeSliderProps {
	min: number;
	max: number;
	defaultValue: number;
	topValue?: boolean;
	textSlider?: string;
	// onChange: (value: number) => void;
}

const SingleRangeSlider = ({ min, max, defaultValue, topValue, textSlider }: SingleRangeSliderProps) => {
	const [value, setValue] = useState(defaultValue);
	const progress = ((value - min) / (max - min)) * 100;

	return (
		<>
			<div className='range'>
				{topValue && (
					<div className='topValue'>
						<div className='description'>
							<span>
								{textSlider}
								{/* Максимальное расстояние */}
							</span>
						</div>
						<div className='valueTop value'>
							<span>{value} км</span>
						</div>
					</div>
				)}

				<label htmlFor='range' className='range__label'>
					<input
						type='range'
						id='range'
						min={min}
						max={max}
						defaultValue={defaultValue}
						onChange={(e) => {
							setValue(e.target.value);
						}}
					/>
					<div className='range__background'></div>
					<div className='range__progress' id='range-progress' style={{ width: `${progress}%` }}></div>
				</label>
				{!topValue && <div className='value'>{value}</div>}
			</div>
		</>
	);
};
export default SingleRangeSlider;
