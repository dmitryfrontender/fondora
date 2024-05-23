import React, { useEffect, useMemo, useState } from 'react';
import './style/App.scss';
import PageWrapper from './layout/PageWrapper/PageWrapper';

// import { Icon } from './assets/icons/icons';
// import Icons from "./assets/icons/sprite.jsx";

// import MainWrapper from './layout/MainWrapper/MainWrapper';

import Sidebar from './layout/Sidebar/Sidebar';
import FilterModal from './components/Modals/LikesFilterModal/FilterModal';
import BoostModal from './components/Modals/Boosts/BoostModal';
import { useSelector } from 'react-redux';
import MobileChat from './components/MobileChat/MobileChat';

import { setMobileScreen } from './store/rootSlice';
import { useDispatch } from 'react-redux';

// import { Route, Routes, Navigate } from 'react-router-dom';


function App() {

  const [width, setWidth] = useState(window.innerWidth);

  const likeModal = useSelector((state: any) => state.LikesState.likesModal);
  const boostModal = useSelector((state: any) => state.BoostState.boostModal);
  const mobileChat = useSelector((state: any) => state.mainState.mobileChat);

  const dispatch = useDispatch();

  const checkScreen = useMemo(() => {
    return width >= 1024
  }, [width])
  
  
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
    <div className="App">
        <Sidebar />
        <PageWrapper />
        {
            likeModal && <FilterModal/>
        }
        {
            boostModal && <BoostModal/>
        }
        {
          mobileChat && <MobileChat />
        }
    </div>
  );
}

export default App;
