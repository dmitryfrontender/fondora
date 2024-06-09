import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setVerifyProfileModal } from '../../../store/VerifyProfileSlice';
import SVGIcon from '../../../assets/icons/svgComponent';
import DefaultBtn from '../../DefaultBtn/DefaultBtn';
import './VerifyProfile.scss';

const VerifyProfile = () => {
	const ref = useRef<HTMLInputElement>(null);

	const dispatch = useDispatch();

	const handleClickOutside = (e: any) => {
		if (e.target.className === ref.current?.className) {
			dispatch(setVerifyProfileModal(false));
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	});

	return (
		<>
			<div className='VerifyProfile Modal' ref={ref}>
				<div className='modalWrapper'>
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
					<DefaultBtn text='Пройти верификацию' background='red' arrow={true} />
				</div>
			</div>
		</>
	);
};

export default VerifyProfile;
