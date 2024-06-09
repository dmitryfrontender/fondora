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
// import { UseChatId } from "../../utils/ChatId";
import Chat from "../Chat/Chat";
import NewChat from "../NewChat/NewChat";

// SUBSCRIPTIONS
import SubscriptionWrapper from "../SubscriptionWrapper/SubscriptionWrapper";

import SuperLike from "../../pages/BoostSuperlike/SuperLikePage/SuperLike";

import MyProfileLayout from "../Outlet/MyProfileLayout/MyProfileLayout";
import SettingsLayout from "../Outlet/SettingLayout/SettingsLayout";
import MessageLayout from "../Outlet/MessagesLayout/MessageLayout";
import PairsLayout from "../Outlet/PairsLayout/PairsLayout";
import MobileLikesTop from "../../components/MobileLikesTop/MobileLikesTop";
import GoalPage from "../../pages/GoalPage/GoalPage";


import './PageWrapper.scss'
import MobileSettings from "../../pages/MobileSettings/MobileSettings";


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
                <Route path="/likes-top-profile" element={<MobileLikesTop />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/pairs" element={<Messages />} />


                {/* <Route path="/pairs" element={<Messages />} /> */}
                <Route path="/mobile-settings" element={<MobileSettings />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/goal-page" element={<GoalPage />} />

                <Route path="/notifications" element={<Notifications />} />
                <Route element={<MyProfileLayout />}>
                    <Route path="/my-profile" element={<MyProfile />} />
                    <Route path="/my-profile/subscriptions" element={<SubscriptionWrapper page={0}/>} />
                    <Route path="/my-profile/edit-profile" element={<EditMyProfile />} />
                    <Route path="/my-profile/gold-subscription" element={<SubscriptionWrapper page={1}/>} />
                    <Route path="/my-profile/plus-subscription" element={<SubscriptionWrapper page={0}/>} />
                    <Route path="/my-profile/vip-subscription" element={<SubscriptionWrapper page={2}/>} />
                    <Route path="/my-profile/super-likes" element={<SuperLike />} />
                </Route>
                <Route element={<SettingsLayout />}>
                     <Route path="/settings/super-likes" element={<SuperLike />} />
                    <Route path="/settings/boosts" element={<AddBoost />} />

                </Route>
                <Route element={<MessageLayout />}>
                    <Route path='/messages/chat/:id' element={<Chat/>} />

                </Route>
                <Route element={<PairsLayout />}>
                    <Route path='/pairs/newChat/:id' element={<NewChat/>} />
                </Route>
                
            </Routes>
        </div>

    </>
    )
    
}

export default PageWrapper