import React, { useEffect, useMemo, useState } from "react";
import { IMessages } from "../../model/MessagesModel";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { mobileChatState } from "../../store/rootSlice";
import { setChatId } from "../../store/rootSlice";
import { mobileScreenEnable } from "../../store/selectors";
// interface IProps {
//     mobile?: boolean | undefined
// }

// type CombinedProps = {item: IMessages} & IProps 

const MessageComponent = (item: IMessages) => {

    // const mobileDimension = useSelector((state: any) => state.mainState.mobileScreen, () => {return true});
    // const [mobileScreen, setmobileScreen] = useState<boolean | undefined>(false);
    const [mobileScreen, setMobileScreen] = useState(false);
    const mobileDimension = useSelector(mobileScreenEnable);

    // const mobileDimension = useSelector(screenSelector);
    const dispatch = useDispatch();

    const handleActiveChat= (id: string) => {
        const chats = document.querySelectorAll('.chat');
        chats.forEach((chat: any) => {
            chat.id === id ? chat.classList.add('activeChat') : chat.classList.remove('activeChat');
        })
    }

    const linkToChat = (chatId: any) => {
        
        if (mobileScreen) {
            dispatch(mobileChatState('mobileChat-open'));
        } 
        
        dispatch(setChatId(chatId.toString()));

    }

    const checkMobileScreen = useMemo(() => {

            return    mobileDimension
        
    }, [mobileDimension]);


    useEffect(() => {

        checkMobileScreen ? setMobileScreen(true) : setMobileScreen(false);


    }, [checkMobileScreen]);


    

    return(
        <>
            <Link to={`/messages/chat/${item.id}`} 
            onClick={() => linkToChat(item.id)}
            >
                <li key={item.id} 
                    className="chat"   
                    id={item.id.toString()} 
                    onClick={(event: any) => {
                        handleActiveChat(event.currentTarget.id)
                        
                    
                    }}
                >

                    <div className="userAvatar">
                        <img src={item.image} alt="avatar" />
                        {
                            item.userOnLine ? <div className="onLinePin"></div> : null
                        }
                    </div>
                    <div className="userMessage">
                        <div className="userName">
                            <div className="name">
                                <span>
                                    {item.userName}
                                </span>
                            </div>
                            {
                                item.isLike ?
                                    <div className="likeLabel">
                                        <span>
                                            Лайкнул(а) тебя
                                        </span>
                                    </div> : null
                            }
                        </div>
                        <div className="message">
                            {
                                item.userOnLine ?
                                    <span>
                                        {item.messages.map((item) => {
                                            return(
                                                <span key={item.id}>
                                                    {item.text}
                                                </span>
                                            )
                                        })}
                                    </span>
                                    :
                                    <span className="lastUserActivity">
                                        Был(а) недавно, создай пару прямо сейчас!

                                    </span>
                            }
                            
                        </div>
                    </div>
                    {
   
                        item.newMessages ? <div className="unReadPin" ></div> : null
             
                    }
                </li>
            </Link> 
        </>
    )
}

export default MessageComponent

