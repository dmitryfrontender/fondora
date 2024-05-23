import React from "react";
import { Link, Outlet } from "react-router-dom";




const SettingsLayout = () => {

    return (
        <>
            <Link to={'/settings/super-likes'}/>
            <Link to={'/settings/boosts'}/>
            {/* <Link to={'/my-profile'}/> */}


            <Outlet />
        </>
    );
}


export default SettingsLayout