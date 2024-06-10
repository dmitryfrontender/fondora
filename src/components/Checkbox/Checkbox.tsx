import React from 'react';
import './Checkbox.scss';
import SVGIcon from '../../assets/icons/svgComponent.jsx';

import { useState } from 'react';

const Checkbox = () => {
	const [isChecked, setIsChecked] = useState(false);

	const toggleCheckbox = () => {
		setIsChecked(!isChecked);
	};

	return (
		<div className={`Checkbox ${isChecked ? 'activeCheckbox' : ''} `} onClick={toggleCheckbox}>
			{isChecked ? <SVGIcon name='checkboxIcon' fill='#FFF' size={15} /> : null}
		</div>
	);
};

export default Checkbox;
