import React from 'react';
import './Notifications.scss';
import { useSelector } from 'react-redux';
import EmptyNotifications from '../../layout/EmptyNotifications/EmptyNotifications';

const Notifications = () => {
	const emptyNotifications = useSelector((state: any) => state.mainState.isNotification);

	return <>{!emptyNotifications ? <EmptyNotifications /> : <div className='Notifications'></div>}</>;
};

export default Notifications;
