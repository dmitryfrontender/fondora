import React, { useEffect, useMemo, useState } from 'react';
import './style/App.scss';
import PageWrapper from './layout/PageWrapper/PageWrapper';

// import { Icon } from './assets/icons/icons';
// import Icons from "./assets/icons/sprite.jsx";

// import MainWrapper from './layout/MainWrapper/MainWrapper';

import Sidebar from './layout/Sidebar/Sidebar';
import FilterModal from './components/Modals/LikesFilterModal/FilterModal';
import BoostModal from './components/Modals/Boosts/BoostModal';
import ProtectModal from './components/Modals/Protect/ProtectModal';
import { useSelector } from 'react-redux';
import MobileChat from './components/MobileChat/MobileChat';
import MobileNewChat from './components/MobileNewChat/MobileNewChat';
import VideoChatModal from './components/Modals/VideoChat/VideoChatModal';
import BlockUser from './components/Modals/BlockUser/BlockUser';
import ShareProfile from './components/Modals/ShareProfile/ShareProfile';
import NewLike from './components/Modals/NewLike/NewLike';
import VerifyProfile from './components/Modals/VerifyProfile/VerifyProfile';
import GoalModal from './components/Modals/GoalModal/GoalModal';

import { setMobileScreen } from './store/rootSlice';
import { useDispatch } from 'react-redux';
// import { verifyProfileState } from './store/VerifyProfileSlice';

// import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
	const [width, setWidth] = useState(window.innerWidth);

	const likeModal = useSelector((state: any) => state.LikesState.likesModal);
	const boostModal = useSelector((state: any) => state.BoostState.boostModal);
	const mobileChat = useSelector((state: any) => state.mainState.mobileChat);
	const mobileNewChat = useSelector((state: any) => state.mainState.mobileNewChat);
	const protectModal = useSelector((state: any) => state.ProtectState.protectModal);
	const shareProfileModal = useSelector((state: any) => state.ShareProfileState.shareProfileModal);
	const videoChatModal = useSelector((state: any) => state.VideoChatState.videoChatModal);
	const blockUserModal = useSelector((state: any) => state.ProtectState.blockUserModal);
	const newLikeModal = useSelector((state: any) => state.NewLikeState.newLikeModal);
	const verifyProfileModal = useSelector((state: any) => state.VerifyProfileState.verifyProfileModal);
	const goalModal = useSelector((state: any) => state.goalPageState.goalPageModal);
	// const mobileScreen = useSelector((state: any) => state.mainState.mobileScreen)

	// const pageWrapper = document.querySelector('.pageWrapper')
	const dispatch = useDispatch();

	// if (mobileScreen) {
	//   (pageWrapper as HTMLElement).style.top = '0'

	// }


	const checkScreen = useMemo(() => {
		return width > 1023;
	}, [width]);

	useEffect(() => {
		checkScreen ? dispatch(setMobileScreen(false)) : dispatch(setMobileScreen(true));

		const handleResize = (event: any) => {
			setWidth(event.target.innerWidth);
		};
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [checkScreen, dispatch]);

	return (
		<div className='App'>
			<Sidebar />
			<PageWrapper />
			{likeModal && <FilterModal />}
			{boostModal && <BoostModal />}
			{mobileChat && <MobileChat />}
			{mobileNewChat && <MobileNewChat />}
			{protectModal && <ProtectModal />}
			{videoChatModal && <VideoChatModal />}
			{shareProfileModal && <ShareProfile />}
			{blockUserModal && <BlockUser />}
			{newLikeModal && <NewLike />}
			{verifyProfileModal && <VerifyProfile />}
			{goalModal && <GoalModal />}
		</div>
	);
}

export default App;
