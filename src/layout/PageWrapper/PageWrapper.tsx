import React, { useEffect } from "react";

import Matching from "../../pages/Matching/Matching.tsx";
import Likes from "../../pages/Likes/Likes.tsx";
import TopProfile from "../../pages/Top-profiles/TopProfile.tsx";
import Messages from "../../pages/Messages/Messages.tsx";
import Settings from "../../pages/Settings/Settings.tsx";
import Notifications from "../../pages/Notifications/Notifications.tsx";
import MyProfile from "../../pages/My-profile/MyProfile.tsx";
import EditMyProfile from "../../pages/EditMyProfile/EditMyProfile.tsx";
import { Route, Routes } from 'react-router-dom';

import MyProfileLayout from "../MyProfileLayout/MyProfileLayout.tsx";

import './PageWrapper.scss'


const PageWrapper = () => {


    useEffect(() => {
        window.history.scrollRestoration = 'manual';
    }, []);

    return (
    <>
        <div className="pageWrapper">

            {/* <Matching /> */}
            <Routes>

          {/* <Route path="/" element={<Navigate to="/" />} /> */}
                <Route path="/" element={<Matching />} />

                <Route path="/likes" element={<Likes />} />
                <Route path="/top-profiles" element={<TopProfile />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route element={<MyProfileLayout />}>
                    <Route path="/my-profile" element={<MyProfile />} />
                    <Route path="/my-profile/edit-profile" element={<EditMyProfile />} />
                </Route>



                {/* <Route path="/my-profile" element={<MyProfile />} />
                <Route path="/my-profile/edit-profile" element={<EditMyProfile />} /> */}
                




            </Routes>



            

        </div>

    </>
    )
    
}

export default PageWrapper