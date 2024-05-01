import React from "react";
import { Link, Outlet } from "react-router-dom";


const MyProfileLayout = () => {


    return(
        <>
            <Link to={'/my-profile'}/>
            <Link to={'/my-profile/edit-my-profile'}/>
            <Link to={'/my-profile/gold-subscription'}/>
            <Link to={'/my-profile/plus-subscription'}/>
            <Link to={'/my-profile/vip-subscription'}/>
            <Link to={'/my-profile/super-likes'}/>
            <Link to={'/settings/super-likes'}/>


            <Outlet />
        </>
    )
  
   
}



export default MyProfileLayout