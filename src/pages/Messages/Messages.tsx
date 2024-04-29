import React from "react";
import './Messages.scss'

import { useSelector } from "react-redux";
import NoMessages from "../../layout/NoMessageLayout/NoMessages";
// import { MessageState } from "../../store/rootSlice";





const Messages = () => {

    const messageState = useSelector((state: any) => state.mainState.isMessage)



    

    return (
        <>
            {
                !messageState ? 
                    <NoMessages/> 
                : 
                <div className="message">
                    <h1>messages exist</h1>
                </div>
            }
        
        
        
        
        
        
        
        </>
    ) 
    
}

export default Messages