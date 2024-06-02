import React, { useEffect } from "react";
import './Typing.scss'
import { setTypingChatId } from "../../store/rootSlice";
import { useDispatch } from "react-redux";

interface IProps {
    userName: string
    userAvatar: string
    userId?: number
}


const Typing = ({ userName, userAvatar, userId }: IProps) => {


    
const dispatch = useDispatch()


useEffect(() => {
    dispatch(setTypingChatId(userId))
}, [dispatch, userId])
    

    return (
        <div className="typing">
            <div className="dotWrapper">
                <div className="typingDot "></div>
                <div className="typingDot "></div>
                <div className="typingDot "></div>

            </div>
            <div className="avatar">
                <img src={userAvatar} alt="avatar" />
            </div>
            <div className="userName">
                <span>{userName}</span>


            </div>
            <div className="description">
                <span>Печатает</span>
               

            </div>
            <div className="textDot">
                <span>.</span>
                <span>.</span>
                <span>.</span>
            </div>

         
        </div>
    )
}



export default Typing