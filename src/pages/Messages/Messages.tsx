import React from "react";
import './Messages.scss'

import { useSelector } from "react-redux";
import NoMessages from "../../layout/NoMessageLayout/NoMessages";





const Messages = () => {

    const messageState = useSelector((state: any) => state.mainState.isMessage)
    return (
        <>
            {
                !messageState ? 
                    <>
                        <NoMessages/> 

                    </>
                : 
                <div className="message"></div>
            }
        </>
    ) 
    
}

export default Messages