import React from 'react';
import SVGIcon from '../../assets/icons/svgComponent';
import './DefaultBtn.scss';

interface buttonProps {
	background: string;
	arrow: boolean;
	arrowLeft?: boolean;
	text: string;
	// children?: React.ReactNode
}

const DefaultBtn = ({ background, arrow, arrowLeft, text }: buttonProps) => {
	const buttonBg = (background: string) => {
		switch (background) {
			case 'red':
				return {
					borderRadius: '30px',
					background: 'linear-gradient(135.00deg, rgb(132, 9, 56) -0.15%,rgb(242, 34, 113) 99.85%),linear-gradient(135.00deg, rgb(24, 25, 32) 0%,rgb(15, 15, 19) 100%)'
				};
			// break;
			case 'blue':
				return {
					borderRadius: '30px',
					background:
						'linear-gradient(135.00deg, rgb(55, 63, 255) 0.009%,rgb(34, 202, 255) 100.009%),linear-gradient(135.00deg, rgb(132, 9, 56) -0.15%,rgb(242, 34, 113) 99.85%),linear-gradient(135.00deg, rgb(24, 25, 32) 0%,rgb(15, 15, 19) 100%)'
				};
			case 'roseAquaGradient':
				return {
					borderRadius: '30px',
					background:
						'linear-gradient(135.85deg, rgb(255, 55, 223) 0.08%,rgb(34, 255, 242) 100.222%),linear-gradient(180.00deg, rgb(255, 55, 223),rgb(34, 255, 242) 100%),linear-gradient(180.00deg, rgb(55, 63, 255),rgb(34, 202, 255) 100%),linear-gradient(135.00deg, rgb(132, 9, 56) -0.144%,rgb(242, 34, 113) 99.856%),linear-gradient(135.00deg, rgb(24, 25, 32),rgb(15, 15, 19) 100%)'
				};
			case 'transparent':
				return {
					borderRadius: '30px',
					background: 'transparent',
					border: '1px solid white'
				};
			// break;
		}
	};

	return (
		<button className='defaultBtn' style={buttonBg(background)}>
			{arrowLeft ? <SVGIcon name='pointerIcon' size={20} /> : null}
			<span>{text}</span>
			{arrow ? <SVGIcon name='cursorRight' size={20} /> : null}
		</button>
	);
};

export default DefaultBtn;
