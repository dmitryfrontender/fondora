import React, {  useEffect, useRef, useState } from 'react';
import { storagePhotos } from '../../../Data/StoragePhoto';
// import DefaultBtn from "../../DefaultBtn/DefaultBtn";
import './AddPhotos.scss';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import SVGIcon from '../../../assets/icons/svgComponent';

interface IPhoto {
	src: string;
	alt: string;
}

interface IProps {
	addPhoto: (photo: IPhoto[]) => void;
}

const AddPhoto = ({ addPhoto }: IProps) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [loaded, setLoaded] = useState(false);
	const [selectedPhotos, setSelectedPhotos] = useState<IPhoto[]>([]);
	const [photoCounter, setPhotoCounter] = useState<number>(0);
	const [clickedPhotos, setClickedPhotos] = useState(0);
	const counterRef = useRef<(HTMLDivElement | null)[]>([]);
	const [clearCounter, setClearCounter] = useState(false);

	const handlePhotoClick = (photo: IPhoto, element: any) => {

		setClickedPhotos(element)

		setSelectedPhotos((prevSelectedPhotos) => {
			if (prevSelectedPhotos.includes(photo)) {
				if (photoCounter !== 0) {
					setPhotoCounter(photoCounter - 1)
				}
				return prevSelectedPhotos.filter((selectedPhoto) => selectedPhoto !== photo);
			} else {
				setPhotoCounter(photoCounter + 1)
				return [...prevSelectedPhotos, photo];
			}
		});

	};function Arrow(props: { disabled: boolean; left?: boolean; onClick: (e: any) => void }) {
		const disabled = props.disabled ? ' arrow--disabled' : '';
		return (
			<div onClick={props.onClick} className={`arrow ${props.left ? 'arrow--left' : 'arrow--right'} ${disabled}`}>
				{props.left && (
					// <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
					<SVGIcon name='arrowLeft' size={20} />
				)}
				{!props.left && (
					// <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
					<SVGIcon name='arrowRight' size={25} />
				)}
			</div>
		);
	}

	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
		initial: 0,
		drag: true,
		mode: "snap",
		slides: { perView: 'auto' },
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel);
		},
		created() {
			setLoaded(true);
		},
	});


	const sendPhotos = () => {
		selectedPhotos.length > 0 && addPhoto([...selectedPhotos]);
		setSelectedPhotos([]);
		setPhotoCounter(0);
		setClearCounter(true);
	}

	useEffect(() => {

		if (clearCounter){
			counterRef.current.forEach((el: any) => {
				const node = el.childNodes[1];
				node.textContent = '';
			})
			setClearCounter(false)
		}

		const recalculateCounter = () => {

			let localCounter = 1;

			counterRef.current.forEach((el) => {

				if (el?.classList.contains('activeItem')) {
					el.childNodes[1].textContent = `${localCounter}`;
					localCounter++;

				}

			})

		}

		counterRef.current.forEach((ref, index) => {
			if (ref?.dataset.id === clickedPhotos.toString()) {
				const element = ref?.childNodes[1];
				if (element && element.textContent === '') {
					element.textContent = `${photoCounter}`

				} else if (element && element.textContent !== '') {
					element.textContent = ''
					recalculateCounter()

				}
			}

		});

	}, [clickedPhotos, photoCounter, selectedPhotos, clearCounter])


	const defaultStyle = {
		border: '4px solid transparent',
		borderRadius: '15px'

	};
	const activeStyle = {
		border: `4px solid #DF3C5E`,
		borderRadius: '15px'
	};

	const activeBtn = 'linear-gradient(135.00deg, rgb(132, 9, 56) -0.075%,rgb(242, 34, 113) 99.925%)';

	return (
		<div className='AddPhoto'>
			<div
				className='btn'
				onClick={() => {sendPhotos()}}
			>
				<button style={{ background: selectedPhotos.length > 0 ? activeBtn : '' }}>
					<SVGIcon name='sendTgBtn' width={20} />
				</button>
			</div>
			<div className='photoWrapper keen-slider' ref={sliderRef}>
				{storagePhotos.map((item, index) => {
					const isSelected = selectedPhotos.includes(item);

					return (
						<div
							className={`keen-slider__slide number-slide${item.id} item ${isSelected ? 'activeItem' : ''}`}
							data-id={item.id}
							key={item.id}
							onClick={() => handlePhotoClick(item, item.id)}
							style={isSelected ? activeStyle : defaultStyle}
							ref={(el) => (counterRef.current[index] = el)}
						>
							<img src={item.src} alt={item.alt} />
							<div className='addPhoto'></div>
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

export default AddPhoto;
