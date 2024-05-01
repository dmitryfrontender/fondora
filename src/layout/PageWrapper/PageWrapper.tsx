import React, { useEffect } from "react";

import Matching from "../../pages/Matching/Matching";
import Likes from "../../pages/LikesTopProfile/Likes/Likes";
import TopProfile from "../../pages/LikesTopProfile/Top-profiles/TopProfile";
import Messages from "../../pages/Messages/Messages";
import Settings from "../../pages/Settings/Settings";
import Notifications from "../../pages/Notifications/Notifications";
import MyProfile from "../../pages/My-profile/MyProfile";
import EditMyProfile from "../../pages/EditMyProfile/EditMyProfile";
import { Route, Routes } from 'react-router-dom';

// SUBSCRIPTIONS
import Gold from "../../pages/Subscriptions/Gold/Gold";
import Plus from "../../pages/Subscriptions/Plus/Plus";
import Vip from "../../pages/Subscriptions/Vip/Vip";

import SuperLike from "../../pages/SuperLikePage/SuperLike";

import MyProfileLayout from "../MyProfileLayout/MyProfileLayout";

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
                    <Route path="/my-profile/gold-subscription" element={<Gold />} />
                    <Route path="/my-profile/plus-subscription" element={<Plus />} />
                    <Route path="/my-profile/vip-subscription" element={<Vip />} />
                    <Route path="/my-profile/super-likes" element={<SuperLike />} />
                    <Route path="/settings/super-likes" element={<SuperLike />} />


                    

                </Route>



                {/* <Route path="/my-profile" element={<MyProfile />} />
                <Route path="/my-profile/edit-profile" element={<EditMyProfile />} /> */}
                




            </Routes>



            

        </div>

    </>
    )
    
}

export default PageWrapper