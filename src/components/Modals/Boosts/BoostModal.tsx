import React, { useEffect, useRef } from 'react';
import SVGIcon from '../../../assets/icons/svgComponent';
import DefaultBtn from '../../DefaultBtn/DefaultBtn';
import './BoostModal.scss';
import { useDispatch } from 'react-redux';
import { boostModalState } from '../../../store/BoostSlice';
import { Link } from 'react-router-dom';

const BoostModal = () => {
	const dispatch = useDispatch();
	const ref = useRef<HTMLInputElement>(null);

	const handleClickOutside = (e: any) => {
		if (e.target.className === ref.current?.className) {
			dispatch(boostModalState('close-boostModal'));
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	});

	return (
		<>
			<div className='BoostModal' ref={ref}>
				<div className='boostWrapper'>
					<SVGIcon name='lightningIcon' size={35} />
					<div className='tittle'>
						<h3>Мои Бусты</h3>
					</div>
					<div className='topDescription'>
						<p>Переместите свой профиль на первое место в выбранной зоне поиска на 30 мин., чтобы найти еще больше пар.</p>
					</div>
					<div className='boostInfo'>
						<SVGIcon name='lightningIcon' size={25} />
						<div className='description'>
							<h3>Бустов</h3>
							<span className='quantity'>0&nbsp;</span>
							<span>осталось</span>
						</div>
					</div>
					<Link to={'settings/boosts'} onClick={() => dispatch(boostModalState('close-boostModal'))}>
						<DefaultBtn background='blue' arrow={true} text='Получить еще Бустов' />
					</Link>
				</div>
			</div>
		</>
	);
};

export default BoostModal;
