import React from "react";
import { Link, Outlet } from "react-router-dom";


const MyProfileLayout = () => {


    return(
        <>
            <Link to={'/my-profile'}/>
            <Link to={'/my-profile/edit-my-profile'}/>
            <Outlet />
        </>
    )
  
   
}



export default MyProfileLayout