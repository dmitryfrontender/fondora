import React, { useEffect, useRef } from 'react';
import './DotsModal.scss';
import SVGIcon from '../../../assets/icons/svgComponent';
import { protectModalState, reportUserAvatar, reportUserName, setDotsModal, setReportModal, toggleToBlockUser } from '../../../store/ProtectSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { shareProfileState } from '../../../store/ShareProfileSlice';

const DotsModal = () => {
	const dispatch = useDispatch();
	const ref = useRef<HTMLInputElement>(null);

	const userName = useSelector((state: any) => state.ProtectState.userName);
	const userAvatar = useSelector((state: any) => state.ProtectState.userAvatar);
	const userAge = useSelector((state: any) => state.ProtectState.userAge);
	const userVerified = useSelector((state: any) => state.ProtectState.userVerified);

	const handleClickOutside = (e: any) => {
		if (e.target.className === ref.current?.className) {
			dispatch(setDotsModal(false));
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	});

	return (
		<>
			<div className='DotsModal Modal' ref={ref}>
				<div className='modalWrapper'>
					<div className="modalCloseBtn">
						<SVGIcon name='cancelBtn' size={20} onClick={() => dispatch(setDotsModal(false))} />
					</div>

					<div className="topBlock">
						<div className='userAvatar'>
							<img src={userAvatar} alt='avatar' />
						</div>
						<div className='userName'>
							<span>
								{userName}{userAge ? ',' : ''}
							</span>
							<span>
								{userAge}
							</span>
							<span>
								{
									userVerified ?
									<SVGIcon className='verified' name='fillVerification' size={16} /> :
									''
								}
							</span>
						</div>
					</div>

					<div className='ProfileComponentButtons'>
						<span
							className='ProfileComponentButtonsBlock'
							onClick={() => {
								dispatch(shareProfileState(true));
								dispatch(setDotsModal(false));
							}}
						>
							<span className='ProfileComponentButtonsIcon'>
								<SVGIcon name='shareProfile' size={20} />
							</span>
							<div className='ProfileComponentButtonsText'>
								<span className='ProfileComponentButtonsTitle'>Поделиться профилем</span>
								<span className='ProfileComponentButtonsSubTitle'>Узнай, что думают друзья.</span>
							</div>
						</span>
						<span
							className='ProfileComponentButtonsBlock'
							onClick={() => {
								dispatch(protectModalState(true));
								dispatch(setDotsModal(false));
								dispatch(reportUserAvatar(userAvatar));
								dispatch(reportUserName(userName));
								dispatch(toggleToBlockUser());
							}}
						>
							<span className='ProfileComponentButtonsIcon'>
								<SVGIcon name='blockProfile' size={20} />
							</span>
							<div className='ProfileComponentButtonsText'>
								<span className='ProfileComponentButtonsTitle'>Заблокировать Jessica Black</span>
								<span className='ProfileComponentButtonsSubTitle'>Вы больше не будете видеть друг друга.</span>
							</div>
						</span>
						<span
							className='ProfileComponentButtonsBlock'
							onClick={() => {
								dispatch(setReportModal(true));
								dispatch(setDotsModal(false));
								dispatch(reportUserAvatar(userAvatar));
								dispatch(reportUserName(userName));
							}}
						>
							<span className='ProfileComponentButtonsIcon'>
								<SVGIcon name='reportProfile' size={20} />
							</span>
							<div className='ProfileComponentButtonsText'>
								<span className='ProfileComponentButtonsTitle'>Пожаловаться на Jessica Black</span>
								<span className='ProfileComponentButtonsSubTitle'>Пользователь об этом не узнает.</span>
							</div>
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default DotsModal;
