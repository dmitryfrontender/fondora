import React, { useEffect, useRef } from 'react';
import './VideoChatModal.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setVideoChatModal, setUserAvatar, setUserName } from '../../../store/VideoChatSlice';
import ownerAvatar from '../../../assets/avatar/user-avatar.png';
import ToggleBtn from '../../ToggleBtn/ToggleBtn';
import DefaultBtn from '../../DefaultBtn/DefaultBtn';
import SVGIcon from '../../../assets/icons/svgComponent';

const VideoChatModal = () => {
	const userName = useSelector((state: any) => state.VideoChatState.userName);
	const userAvatar = useSelector((state: any) => state.VideoChatState.userAvatar);


	const dispatch = useDispatch();
	const ref = useRef<HTMLInputElement>(null);

	const handleClickOutside = (e: any) => {
		if (e.target.className === ref.current?.className) {
			dispatch(setVideoChatModal(false));
			dispatch(setUserAvatar(''));
			dispatch(setUserName(''));
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	});

	return (
		<>
			<div className='videoChatModal Modal' ref={ref}>
				<div className='modalWrapper'>
					<div className="modalCloseBtn">
						<SVGIcon name='cancelBtn' size={20} onClick={() => dispatch(setVideoChatModal(false))} />
					</div>
					<div className='avatarsBlock'>
						<img src={ownerAvatar} alt='avatar' />
						<img className='owner' src={userAvatar} alt='avatar' />
					</div>
					<div className='tittle'>
						<h2>Проверьте взаимность ваших симпатий в видеочате.</h2>
					</div>
					<div className='description'>
						<span>Если вы оба проявите интерес, то сможете пообщаться в видеочате.</span>
					</div>
					<div className='toggleToTalk'>
						<div className='main'>
							<div className='question'>
								<span>Мне было бы интересно пообщаться с пользователем <span style={{ color: 'var(--white)' }}>{userName}</span> в видеочате.</span>
							</div>
							<ToggleBtn />
						</div>
						<div className='sub'>
							<span>Вы можете изменить своё решение в любое время.</span>
						</div>
					</div>
					<DefaultBtn text='Готово' background='red' arrow={true} />
				</div>
			</div>
		</>
	);
};

export default VideoChatModal;
