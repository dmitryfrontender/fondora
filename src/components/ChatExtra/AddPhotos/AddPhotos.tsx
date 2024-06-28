import React, { useEffect, useRef, useState } from 'react';
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
	const [photoCounter, setPhotoCounter] = useState<number>(0)

	const counterRef = useRef<HTMLDivElement>(null)

	const handlePhotoClick = (photo: IPhoto, element: any) => {

		console.log(element);
		
		setSelectedPhotos((prevSelectedPhotos) => {
			if (prevSelectedPhotos.includes(photo)) {
				if (photoCounter !== 0) {
					setPhotoCounter(photoCounter - 1)
				}
				return prevSelectedPhotos.filter((selectedPhoto) => selectedPhoto !== photo);
			} else {
				setPhotoCounter(photoCounter + 1)
				// if (counterRef.current) {
				// 	counterRef.current.textContent = `${photoCounter}`;
				// }
				// console.log(counterRef.current);
				
				return [...prevSelectedPhotos, photo];
			}
		});
	};

	const defaultStyle = {
		border: '4px solid transparent',
		borderRadius: '15px'

		// borderRadius: '50%'
	};
	const activeStyle = {
		border: `4px solid #DF3C5E`,
		borderRadius: '15px'
	};

	console.log(photoCounter)

	useEffect(() => {
		if (counterRef.current) {
			counterRef.current.textContent = `${photoCounter}`;
		}
	}, [photoCounter]);

	const activeBtn = 'linear-gradient(135.00deg, rgb(132, 9, 56) -0.075%,rgb(242, 34, 113) 99.925%)';

	return (
		<div className='AddPhoto'>
			<div
				className='btn'
				onClick={() => {
					selectedPhotos.length > 0 && addPhoto([...selectedPhotos]);
					setSelectedPhotos([]);
				}}
			>
				{/* <DefaultBtn text="Отправить" background="red" arrow={false}/> */}
				<button style={{ background: selectedPhotos.length > 0 ? activeBtn : '' }}>
					<SVGIcon name='sendTgBtn' width={20} />
				</button>
			</div>
			<div className='photoWrapper'>
				{storagePhotos.map((item, index) => {
					const isSelected = selectedPhotos.includes(item);
					return (
						<div className={`item ${isSelected ? 'activeItem' : ''}`} key={index} onClick={(event) => handlePhotoClick(item, event)} style={isSelected ? activeStyle : defaultStyle} ref={counterRef}>
							<img src={item.src} alt={item.alt} />
							<div className='addPhoto' ></div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default AddPhoto;
