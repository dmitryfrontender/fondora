import React, { useEffect, useState } from "react";
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


// interface IProps {
//     chatId: boolean
// }


const MobileChat = () => {

    const chatId = useSelector((state: any) => state.mainState.chatId);

    const [chatData, setChatData] = useState ({} as IMessages);

    // const {id}:any = useParams();


    // console.log(chatData);
    

    const dispatch = useDispatch();



    useEffect(() => {

            messagesData.forEach((item:IMessages) => {

                if (item.id.toString() === chatId) {
                    setChatData(item);
                  
                }
    
            })
            
        
    }, [chatId]);



    return(
        <>
            <div className="MobileChat" >
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
                            <button>
                                <SVGIcon name="videoCallIcon" size={30} />
                            </button>
                            <button>
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

                    </div>
                    <EnterMessage />
                </div>
            </div>
        
        </>
    )
}



export default MobileChat