import React, { useCallback, useState } from 'react';
import SVGIcon from '../../assets/icons/svgComponent';
import './ProfileButtons.scss';
import './MediaProfileButtons.scss';

const ProfileButtons = () => {
	const [approved, setApproved] = useState('');

	const handleApprove = useCallback(() => {
		setApproved('approved');
	}, []);

	const handleDecline = useCallback(() => {
		setApproved('declined');
	}, []);

	return (
		<div className='ProfileButtons'>
			<div className='buttonsWrapper'>
				<div
					className={`GamePadPanelButtonsItem item-big ${approved === 'declined' ? 'declined' : ''}`}
					onClick={() => handleDecline()}
					aria-hidden='true'
				>
					<SVGIcon name='gamepadNoIcon' size={24} />
				</div>
				<div className='GamePadPanelButtonsItem'>
					<SVGIcon name='gamepadRebootIcon' size={16} />
				</div>
				<div className='GamePadPanelButtonsItem'>
					<SVGIcon name='gamepadStarIcon' size={16} />
				</div>
				<div className='GamePadPanelButtonsItem'>
					<SVGIcon name='gamepadBoltIcon' size={16} />
				</div>
				<div
					className={`GamePadPanelButtonsItem item-big ${approved === 'approved' ? 'approved' : ''} ${
						approved === 'declined' ? 'upside-down' : 'item-pink'
					}`}
					onClick={() => handleApprove()}
					aria-hidden='true'
				>
					<SVGIcon name='gamepadHeartIcon' size={24} />
				</div>
			</div>
		</div>
	);
};

export default ProfileButtons;
