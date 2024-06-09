import React from 'react';
import SVGIcon from '../../assets/icons/svgComponent';
import userAvatar from '../../assets/avatar/user-avatar.png';
import './MobileButtons.scss';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const MobileButtons = () => {
	const location = useLocation();
	const path = location.pathname;
	const likeState = useSelector((state: any) => state.mainState.newLike);
	const isNewMessage = useSelector((state: any) => state.mainState.newMessage);

	return (
		<div className='MobileButtons'>
			<div className='buttonsWrapper'>
				<Link to='/'>
					<SVGIcon name='menuIcon' className={`menu-icon ${path === '/' ? 'active-menu' : ''}`} stroke='#BDBDBD' />
				</Link>
				<Link to='/likes-top-profile'>
					<SVGIcon name='heartIcon' className={`menu-icon ${path === '/likes' || path === '/likes-top-profile' ? 'active-menu' : ''}`} stroke='#BDBDBD' />
					{likeState ? <div className='pinnedItem'></div> : null}
				</Link>
				<Link to='goal-page'>
					<SVGIcon name='goalIcon' size={20} fill={`${path === '/goal-page' ? '#F22271' : '#BDBDBD'}`} />
				</Link>
				<Link to='/messages'>
					<SVGIcon name='messageIcon' className={`menu-icon ${path === '/messages' ? 'active-menu' : ''}`} stroke='#BDBDBD' />
					{isNewMessage ? <div className='pinnedItem'></div> : null}
				</Link>
				<Link to='/my-profile'>
					<img src={userAvatar} alt='avatar' />
				</Link>
			</div>
		</div>
	);
};

export default MobileButtons;
