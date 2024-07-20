import React, { useState } from 'react';
import { gifs } from '../../../Data/Gifs';
import SVGIcon from '../../../assets/icons/svgComponent';
import TextareaAutosize from 'react-textarea-autosize';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import './ChatGifs.scss';

interface IGifs {
	addGif: (gif: string) => void;
}

const ChatGifs = ({ addGif }: IGifs) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [areaValue, setAreaValue] = useState('');
	const [loaded, setLoaded] = useState(false);

	const handleInput = (e: any) => {
		setAreaValue(e.target.value);
	};

	function Arrow(props: { disabled: boolean; left?: boolean; onClick: (e: any) => void }) {
		const disabled = props.disabled ? ' arrow--disabled' : '';
		return (
			<div onClick={props.onClick} className={`arrow ${props.left ? 'arrow--left' : 'arrow--right'} ${disabled}`}>
				{props.left && (
					<SVGIcon name='arrowLeft' size={20} />
				)}
				{!props.left && (
					<SVGIcon name='arrowRight' size={20} />
				)}
			</div>
		);
	}

	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
		initial: 0,
		drag: true,
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel);
		},
		created() {
			setLoaded(true);
		},
		slides: {
			perView: 5
			//   spacing: 2,
		}
	});

	return (
		<div className='ChatGifs'>
			<div className='input'>
				{/* <input type="text" placeholder="Поиск GIF" /> */}
				<TextareaAutosize placeholder='Поиск GIF' value={areaValue} minRows={2} maxRows={4} onChange={handleInput} />
				<SVGIcon name='searchBtn' size={20} />
			</div>
			<div className='gifWrapper keen-slider' ref={sliderRef}>
				{gifs.map((elem: any) => {
					return (
						<div className={`keen-slider__slide number-slide${elem.id}`} key={elem.id} onClick={() => addGif(elem.url)}>
							<img src={elem.url} alt='gif' />
						</div>
					);
				})}

				<div className='sliderBtnWrapper'>
					{loaded && instanceRef.current && (
						<>
							<Arrow left onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()} disabled={currentSlide === 0} />

							<Arrow onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()} disabled={currentSlide === instanceRef.current.track.details.slides.length - 1} />
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default ChatGifs;

// gifs.map((elem: any) => {

//     <div className="gif" >
//         <img src={elem} alt="gif" />
//     </div>

// })
