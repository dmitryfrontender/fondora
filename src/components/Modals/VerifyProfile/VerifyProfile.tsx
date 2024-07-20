import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setVerifyProfileModal } from '../../../store/VerifyProfileSlice';
import SVGIcon from '../../../assets/icons/svgComponent';
import DefaultBtn from '../../DefaultBtn/DefaultBtn';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import './VerifyProfile.scss';

const VerifyProfile = () => {
	const refModal = useRef<HTMLInputElement>(null);
	const [slideModal, setSlideModal] = useState<string>('Slide1');
	const [currentSlide, setCurrentSlide] = React.useState(0);

	const [loaded, setLoaded] = useState(false);

	const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
		slides: {
		  perView: 1,
		  spacing: 15,
		},
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel)
		  },
		created() {
			setLoaded(true)
		  },
	  })

	const dispatch = useDispatch();

	const handleClickOutside = (e: any) => {
		if (e.target.className === refModal.current?.className) {
			dispatch(setVerifyProfileModal(false));
		}
	};

	useEffect(() => {}, [loaded])

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	});

	return (
		<>
			<div className='VerifyProfile Modal' ref={refModal}>
				<div className='modalWrapper'>


					{
						slideModal === 'Slide1' ? 
							<>
							{/* <div className="keen-slider__slide number-slide1'"> */}
								<div className='scanIcon'>
									<SVGIcon name='scanVerify' size={40} />
								</div>
								<div className='title'>
									<h2>Пройти верификацию</h2>
								</div>
								<div className='modalItem'>
									<div className='textTop'>
										<span>Сделайте короткое видеоселфи</span>
									</div>
									<div className='selfieIcon'>
										<SVGIcon name='selfieIcon' size={50} />
									</div>
									<div className='note'>
										<span>Подтверди, что на фото действительно ты.</span>

									</div>
								</div>
								<div className="buttonWrapper">
									<DefaultBtn text='Продолжить' background='red' arrow={true} onClick={() => setSlideModal('Slide2')}/>
								</div>
							{/* </div> */}
							</>
						: 
							<>
							{/* <div className="keen-slider__slide number-slide2'"> */}
								<div className='title'>
										<h2>Пройти верификацию</h2>
									</div>
								<div className='modalItem'>
									
									<div className='textTop'>
											<span>Как это работает?</span>
										</div>
									<div className='selfieIcon'>
										<SVGIcon name='selfieIcon' size={50} />
									</div>
									<div className='note keen-slider' ref={ref}>
										<div className=' keen-slider__slide number-slide1'>
											<span >Наша технология сравнивает лицо на видеоселфи с лицом на фоторгафии в удостоверении личности, чтобы проверить, совпадает ли их геометрия. Данные геометрии лица в некоторых случаях могут считаться беометрическими данными.</span>
										</div>
										<div className=' keen-slider__slide number-slide2'>
											<span >2 Наша технология сравнивает лицо на видеоселфи с лицом на фоторгафии в удостоверении личности, чтобы проверить, совпадает ли их геометрия. Данные геометрии лица в некоторых случаях могут считаться беометрическими данными.</span>
										</div>
									</div>
									{loaded && instanceRef.current && (
									<div className="dots">
									{[
										...Array(instanceRef.current.track.details.slides.length ).keys(),
									].map((idx) => {
										return (
										<button
											key={idx}
											onClick={() => {
											instanceRef.current?.moveToIdx(idx)
											setCurrentSlide(idx)

											}}
											className={"dot" + (currentSlide === idx ? " active" : "")}
										></button>
										)
									})}
									</div>
											)}
								</div>
								<div className="buttonWrapper">
									<DefaultBtn text='Не сейчас' background='transparent' arrow={false} onClick={() => {setSlideModal('Slide1'); setLoaded(false)}}/>
									<DefaultBtn text='Продолжить' background='red' arrow={true} onClick={() => setSlideModal('Slide2')}/>
								</div>
							{/* </div> */}
							
							</>
					}

					<div className="sliderBtnWrapper ">
						<div className={`sliderBtn leftBtn ${slideModal === 'Slide1' ? 'disabledBtn' : ''}`} onClick={() => {setSlideModal('Slide1'); setLoaded(false)}}>
							<SVGIcon 
								name={"sliderLeftBtn"}
								size={20}
							/>

						</div>
						<div className={`sliderBtn rightBtn ${slideModal === 'Slide2' ? 'disabledBtn' : ''}`} onClick={() => {setSlideModal('Slide2')}}>
							<SVGIcon 
								name={"sliderRightBtn"} 
								size={20}
							/>

						</div>
					</div>

					


				</div>
			</div>
		</>
	);
};

export default VerifyProfile;
