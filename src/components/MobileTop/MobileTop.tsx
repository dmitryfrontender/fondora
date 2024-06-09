import React, { useEffect } from 'react';
import SVGIcon from '../../assets/icons/svgComponent';
import { Link, useLocation } from 'react-router-dom';
import './MobileTop.scss';

const MobileTop = () => {
	const location = useLocation();
	const path = location.pathname;

	const settingPageWrapper = (path: string) => {
		// const pageWrapper = document.querySelector('.pageWrapper');
		// const mobileTop = document.querySelector('.MobileTop')
		// if (path === '/settings'){
		//     // (pageWrapper as HTMLElement).style.top = '0';
		// } else if(path === '/my-profile/subscriptions' || path === '/my-profile/super-likes' || path === '/settings/boosts' || path === '/my-profile/edit-profile') {
		//     // (pageWrapper as HTMLElement).style.top = '0';
		//     (mobileTop as HTMLElement).style.display = 'none'
		// }
		// else {
		//     // (pageWrapper as HTMLElement).style.top = '60px';
		//     (mobileTop as HTMLElement).style.display = 'block'
		// }
	};

	useEffect(() => {
		settingPageWrapper(path);
	}, [path]);

	return (
		<>
			{location.pathname === '/mobile-settings' || location.pathname === '/goal-page' ? null : (
				<div className='MobileTop'>
					<div className='topWrapper'>
						<div className='logo'>
							<SVGIcon name='mainLogo' />
						</div>

						<div className='topBtn'>
							<Link to='/notifications'>
								<SVGIcon name='notification' stroke='#BDBDBD' />
							</Link>
							{path === '/my-profile' ? (
								<Link to='/settings'>
									<SVGIcon name='protectIcon' stroke='#BDBDBD' />
								</Link>
							) : (
								<Link to='/mobile-settings'>
									<SVGIcon name='settings' stroke='#BDBDBD' />
								</Link>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default MobileTop;
