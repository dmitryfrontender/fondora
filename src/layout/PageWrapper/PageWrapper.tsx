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
import AddBoost from "../../pages/BoostSuperlike/AddBoost/AddBoost";

// SUBSCRIPTIONS
import SubscriptionWrapper from "../SubscriptionWrapper/SubscriptionWrapper";
// import Gold from "../SubscriptionWrapper/Subscriptions/Gold/Gold";
// import Plus from "../SubscriptionWrapper/Subscriptions/Plus/Plus";
// import Vip from "../SubscriptionWrapper/Subscriptions/Vip/Vip";

import SuperLike from "../../pages/BoostSuperlike/SuperLikePage/SuperLike";

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
                    <Route path="/my-profile/subscriptions" element={<SubscriptionWrapper page={0}/>} />
                    <Route path="/my-profile/edit-profile" element={<EditMyProfile />} />
                    <Route path="/my-profile/gold-subscription" element={<SubscriptionWrapper page={1}/>} />
                    <Route path="/my-profile/plus-subscription" element={<SubscriptionWrapper page={0}/>} />
                    <Route path="/my-profile/vip-subscription" element={<SubscriptionWrapper page={2}/>} />
                    {/* <Route path="/my-profile/gold-subscription" element={<Gold />} />
                    <Route path="/my-profile/plus-subscription" element={<Plus />} />
                    <Route path="/my-profile/vip-subscription" element={<Vip />} /> */}
                    <Route path="/my-profile/super-likes" element={<SuperLike />} />
                    <Route path="/settings/super-likes" element={<SuperLike />} />
                    <Route path="/settings/boosts" element={<AddBoost />} />




                    

                </Route>



                {/* <Route path="/my-profile" element={<MyProfile />} />
                <Route path="/my-profile/edit-profile" element={<EditMyProfile />} /> */}
                




            </Routes>



            

        </div>

    </>
    )
    
}

export default PageWrapper