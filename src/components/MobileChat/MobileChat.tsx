import React, { useEffect, useState, useCallback } from "react";
import './MobileChat.scss'
import { mobileChatState } from "../../store/rootSlice";
import { useDispatch, useSelector } from "react-redux";
import SVGIcon from "../../assets/icons/svgComponent";
import { setChatId } from "../../store/rootSlice";
import { Link } from "react-router-dom";
import { messagesData } from "../../Data/MessagesData";
import { IMessages } from "../../model/MessagesModel";
import userImg from '../../assets/avatar/user-avatar.png'
import EnterMessage from "../EnterMessage/EnterMessage";
import { setVideoChatModal, setUserName, setUserAvatar } from "../../store/VideoChatSlice";
import {protectModalState, reportUserAvatar, reportUserName } from "../../store/ProtectSlice";
import Report from "../ReportComponent/Report";
import Typing from "../TypingElement/Typing";



const MobileChat = () => {




    const reportComponent = useSelector((state: any) => state.ProtectState.reportComponent)

    const chatId = useSelector((state: any) => state.mainState.chatId);

    const typingState = useSelector((state: any) => state.mainState.typingState);

    const [chatData, setChatData] = useState ({} as IMessages);

    const [forceUpdate, setForceUpdate] = useState(false);

   

    

    const dispatch = useDispatch();


    const forceRerender = useCallback(() => {
        
        
        setForceUpdate(prevForceUpdate => !prevForceUpdate)



    }, []);

  







    useEffect(() => {

        

            const filteredMessage = messagesData.filter((msg:IMessages) => 
                msg.id.toString() === chatId
    
            )
            
            setChatData(filteredMessage[0]);
            

        
        
        

            
        
    }, [chatId, forceUpdate, chatData]);



    return(
        <>

            {
                
                <div className="MobileChat" >
   
                    {!reportComponent ?

                        <>
                            <div className="container">
                                <div className="chatHeader">
                                    <div className="backBtn" onClick={() => {dispatch(mobileChatState('mobileChat-close')); dispatch(setChatId(''))}}>
                                        <Link to='/messages'>
                                            <SVGIcon name="arrowLeft"  size={30} />

                                        </Link>

                                    </div>
                                    <div className="userAvatar">
                                        <div className="wrapper">
                                            <img src={chatData.image} alt="user" />
                                            {
                                                chatData.userOnLine ? <div className="onLinePin"></div> : null

                                            }

                                        </div>
                                    </div>
                                    <div className="chatBtn">
                                        <button onClick={() => {
                                            dispatch(setVideoChatModal(true))
                                            dispatch(setUserName(chatData.userName))
                                            dispatch(setUserAvatar(chatData.image))

                                        }}>
                                            <SVGIcon name="videoCallIcon" size={30} />
                                        </button>
                                        <button onClick={() => {
                                            dispatch(protectModalState(true));
                                            dispatch(reportUserAvatar(chatData.image));
                                            dispatch(reportUserName(chatData.userName));
                                        }}>
                                            <SVGIcon name="protectIcon" size={30} />
                                        </button>

                                    </div>

                                </div>
                                <div className="chatArea">
                                    <div className="background">
                                        {/* <img src={chatBg} alt="bg" /> */}
                                    </div>
                                    <div className="metInfo">
                                        <div className="avatars">
                                            <img src={chatData.image} alt="avatar" />
                                            <img className="second" src={userImg} alt="avatar" />

                                        </div>
                                        <div className="information">
                                            <span>
                                                Вы и {chatData.userName} образовали пару 
                                            </span>
                                            <div className="date">
                                                <SVGIcon name="calendarIcon" size={20} />
                                                <span>
                                                    {chatData.dateMet}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chatWrapper">
                                        {
                                            typingState 
                                                &&
                                            <Typing userName={chatData.userName} userAvatar={chatData.image}/>

                                        }
                                        <div className="messages">
                                        {Object.keys(chatData).length > 0 ?  chatData.messages.map((item, index) => (

                                            <>
                                                <div className={`message ${item.owner ? 'owner' : 'notOwner'}`} key={index}>
                                                    <span key={index}>{item.text}</span>
                                                </div>

                                            




                                            </>

                                            ))
                                            : 
                                            null

                                            }

                                        </div>

                                        
                                        

                                        

                                                

                                            
                                        
                                    
                                        
                                         

                                          
                                            
                                        
                                    </div>

                                </div>
                                <EnterMessage forceRerender={forceRerender} chatId={chatId}/>
                            </div>
                            
                        
                        </>
                    
                    :

                    <Report/>}

                </div>



            }
           
        
        </>
    )
}



export default MobileChat
