import React, { useEffect, useRef } from 'react';
import { protectModalState, toggleToReport, toggleToBlockUser } from '../../../store/ProtectSlice';
import './ProtectModal.scss';
import '../Modals.scss';
import { useDispatch, useSelector } from 'react-redux';
import SVGIcon from '../../../assets/icons/svgComponent';

const ProtectModal = () => {
	const dispatch = useDispatch();
	const ref = useRef<HTMLInputElement>(null);

	const userName = useSelector((state: any) => state.ProtectState.userName);

	const handleClickOutside = (e: any) => {
		if (e.target.className === ref.current?.className) {
			dispatch(protectModalState(false));
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	});

	return (
		<div className='ProtectModal Modal' ref={ref}>
			<div className='modalWrapper'>
				<div className='tittle'>
					<h2>Инструменты безопасности</h2>
				</div>
				<div className='itemWrapper'>
					<div className='item'>
						<div className='img'>
							<SVGIcon name='deleteBtn' size={20} />
						</div>
						<div className='description'>
							<div className='main'>
								<span>Удалить из пар: {userName}</span>
							</div>
							<div className='sub'>
								<span>Больше не хочешь общаться? Удали пользователя их пар.</span>
							</div>
						</div>
					</div>
					<div
						className='item'
						onClick={() => {
							dispatch(toggleToBlockUser());
						}}
					>
						<div className='img'>
							<SVGIcon name='unAvailableBtn' size={20} />
						</div>
						<div className='description'>
							<div className='main'>
								<span>Заблокировать пользователя {userName}</span>
							</div>
							<div className='sub'>
								<span>Вы больш не будете видеть друг друга.</span>
							</div>
						</div>
					</div>
					<div
						className='item'
						onClick={() => {
							dispatch(toggleToReport());
						}}
					>
						<div className='img'>
							<SVGIcon name='flagBtn' size={20} />
						</div>
						<div className='description'>
							<div className='main'>
								<span>Пожаловаться на {userName}</span>
							</div>
							<div className='sub'>
								<span>Расскажи, что произошло, и мы изучим твою заявку.</span>
							</div>
						</div>
					</div>
					<div className='item'>
						<div className='img'>
							<SVGIcon name='shieldDone' size={20} />
						</div>
						<div className='description'>
							<div className='main'>
								<span>Перейти в центр безопасности</span>
							</div>
							<div className='sub'>
								<span>Советы и инструменты по безопасности. Береги себя.</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ProtectModal;
