import React from 'react';
import './style/App.scss';
import PageWrapper from './layout/PageWrapper/PageWrapper.tsx';

// import { Icon } from './assets/icons/icons';

// import MainWrapper from './layout/MainWrapper/MainWrapper';

import Sidebar from './layout/Sidebar/Sidebar.tsx';
import { Route, Routes, Navigate } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Sidebar />
        <PageWrapper />

        <Routes>

          <Route path="/" element={<Navigate to="/" />} />
          <Route path="/likes" element={<Navigate to="/likes" />} />
          <Route path="/top-profiles" element={<Navigate to="/top-profiles" />} />
          <Route path="/messages" element={<Navigate to="/messages" />} />
          <Route path="/settings" element={<Navigate to="/settings" />} />
          <Route path="/notifications" element={<Navigate to="/notifications" />} />
          <Route path="/my-profile" element={<Navigate to="/my-profile" />} />



        </Routes>



    </div>
  );
}

export default App;
