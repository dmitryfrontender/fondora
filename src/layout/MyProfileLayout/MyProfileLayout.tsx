import React from "react";
import { Link, Outlet } from "react-router-dom";
import { UseChatId } from "../../utils/ChatId";
import { useLocation } from "react-router-dom";


const MyProfileLayout = () => {

    const location = useLocation();
    const path = location.pathname;


    return(
        <>
            <Link to={'/my-profile'}/>
            <Link to={'/my-profile/edit-my-profile'}/>
            <Link to={'/my-profile/gold-subscription'}/>
            <Link to={'/my-profile/plus-subscription'}/>
            <Link to={'/my-profile/vip-subscription'}/>
            <Link to={'/my-profile/super-likes'}/>
            <Link to={`/messages/chat/:${UseChatId(path)}`}/>
            <Link to={'/settings/super-likes'}/>


            <Outlet />
        </>
    )
  
   
}



export default MyProfileLayout