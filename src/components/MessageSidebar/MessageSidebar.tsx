import React, { useEffect, useMemo, useState } from "react";
import SVGIcon from "../../assets/icons/svgComponent";
import { Link } from "react-router-dom";
import { messagesData } from "../../Data/MessagesData";
import { useSelector } from "react-redux";
import MessageComponent from "../MessageComponent/MessageComponent";
import { IMessages } from "../../model/MessagesModel";
import { mobileScreenEnable } from "../../store/selectors";
import Pairs from "../PairsComponent/Pairs";
import './MessageSidebar.scss'

const MessageSidebar = () => {

    const [pressMessageBtn, setPressMessageBtn] = useState(true);
    const newMessages = useSelector((state: any) => state.mainState.newMessage);
    const mobileDimension = useSelector(mobileScreenEnable);
    const [mobileScreen, setMobileScreen] = useState(false);


    const checkMobileScreen = useMemo(() => {

        return    mobileDimension
    
    }, [mobileDimension]);



    useEffect(() => {

        checkMobileScreen ? setMobileScreen(true) : setMobileScreen(false);
      
    }, [checkMobileScreen]);


    const listMessages = () => {

        const unReadMessages: IMessages[] = [];
        const readMessages: IMessages[] = [];
        let newListMessages = [];

        messagesData.forEach((item:IMessages) => {
            // item.messages.forEach((message) => {
                item.newMessages ? unReadMessages.push(item) : readMessages.push(item);
            // })
        })

        newListMessages = [...unReadMessages, ...readMessages];

        return newListMessages.map((item:IMessages) => {
            return(
                <MessageComponent {...item} key={item.id}/>
            )
        })

    }
    
    return(
        <>
            {
                // width <= 1024 ?
                mobileScreen ?

                <>

                    <div className="mobileMessageSidebar">
                        <div className="container">
                            <Pairs/>
                            <div className="messagesWrapper">
                                <ul>
                                    {
                                        newMessages ? 
                                        
                                            listMessages()
                                        
                                        :
                                        
                                        messagesData.map((item: IMessages) => {

                                            return(
                                                <MessageComponent {...item}   key={item.id}/>
                                            )

                                        }) 
                                    }
                                </ul>

                            </div>
                        </div>
                    </div>


                
                
                </>
                :
                <div className="messageSidebar">
                <div className="sidebarTop">
                    <Link to={'/'}>
                        <div className="backBtn">
                            <SVGIcon name="arrowLeft" size={20} />
                        </div>
                    </Link>
                    <div className={`textBtn ${pressMessageBtn ? 'activeBtn' : ''}`} onClick={() => setPressMessageBtn(true)}>
                        <span>
                            Сообщения
                        </span>
                    </div>
                    <div className={`textBtn ${pressMessageBtn ? '' : 'activeBtn'}`} onClick={() => setPressMessageBtn(false)}>
                        <span>
                            Новые пары
                        </span>
                    </div>
                </div>
                {
                    pressMessageBtn ?

                    <div className="messagesWrapper">
                        <ul>
                            {
                                newMessages ? 
                                
                                    listMessages()
                                
                                :
                                
                                messagesData.map((item: IMessages) => {

                                    return(
                                        <MessageComponent {...item} key={item.id}/>
                                    )

                                }) 
                            }
                        </ul>

                    </div>

                    :

                    <Pairs />
                }
            </div>

            }
            
        </>
    )
}

export default MessageSidebar