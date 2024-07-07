import React, {  useEffect, useRef, useState } from 'react';
import { storagePhotos } from '../../../Data/StoragePhoto';
// import DefaultBtn from "../../DefaultBtn/DefaultBtn";
import './AddPhotos.scss';
import SVGIcon from '../../../assets/icons/svgComponent';

interface IPhoto {
	src: string;
	alt: string;
}

interface IProps {
	addPhoto: (photo: IPhoto[]) => void;
}

const AddPhoto = ({ addPhoto }: IProps) => {
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

	};


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
			<div className='photoWrapper'>
				{storagePhotos.map((item, index) => {
					const isSelected = selectedPhotos.includes(item);
					
					return (
						
						<div className={`item ${isSelected ? 'activeItem' : ''}`} data-id={item.id}  key={index} onClick={() => handlePhotoClick(item, item.id)} style={isSelected ? activeStyle : defaultStyle} ref={(el) => (counterRef.current[index] = el)}>
							<img src={item.src} alt={item.alt} />
							<div className='addPhoto'></div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default AddPhoto;
