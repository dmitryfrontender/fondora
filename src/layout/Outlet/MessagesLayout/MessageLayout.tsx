import React from "react";
import { Link, Outlet } from "react-router-dom";





const MessageLayout = () => {


    return (
        <>
            <Link 
                to={'/messages/chat/id'}
                // state={{ from:  }}
            />
            {/* <Link to={'/settings/boosts'}/> */}


            <Outlet />
        </>
    );
}


export default MessageLayout