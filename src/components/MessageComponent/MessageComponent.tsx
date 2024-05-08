import React from "react";
import { IMessages } from "../../model/MessagesModel";
import { Link } from "react-router-dom";


const MessageComponent = (item: IMessages) => {



    const handleActiveChat= (id: string) => {
        const chats = document.querySelectorAll('.chat');
        chats.forEach((chat: any) => {
            chat.id === id ? chat.classList.add('activeChat') : chat.classList.remove('activeChat');
        })

    }


    return(
        <>
            <Link to={`/messages/chat/:${item.id}`}>
                <li key={item.id} 
                    className="chat"   
                    id={item.id.toString()} 
                    onClick={(event: any) => {handleActiveChat(event.currentTarget.id)}}
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
                        item.messages.map((el) => {
                            return(
                                el.unRead ? <div className="unReadPin" key={el.id}></div> : null
                                
                            )
                        })
                    }
                </li>
            </Link> 
        </>
    )
}

export default MessageComponent

