import React, { useEffect, useRef } from "react";
import { blockUserModalState } from "../../../store/ProtectSlice";
import DefaultBtn from "../../DefaultBtn/DefaultBtn";
import { useSelector } from "react-redux";
import './BlockUser.scss'


import { useDispatch } from "react-redux";




const BlockUser = () => {


    const dispatch = useDispatch();
    const userName = useSelector((state: any) => state.ProtectState.userName)
    const userAvatar = useSelector((state: any) => state.ProtectState.userAvatar)



    const ref = useRef<HTMLInputElement>(null);



    const handleClickOutside = (e: any) => {
        
        if (e.target.className === ref.current?.className) {
            dispatch(blockUserModalState(false));
        }
    };



    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    });






    return(
        <>
            <div className="BlockUserModal Modal" ref={ref}>
                <div className="modalWrapper">
                    <div className="userAvatar">
                        <img src={userAvatar} alt="avatar" />
                    </div>
                    <div className="question">
                        <h4>
                            Заблокировать пользователя {userName}?
                        </h4>
                    </div>
                    <div className="description">
                        <span>
                            Это действие нельзя отменить. Ты точно хочешь продолжаить?

                        </span>
                    </div>
                    <div className="modalButtons">
                        <div className="btn" onClick={() => {
                                dispatch(blockUserModalState(false))
                        }}>
                            <DefaultBtn text="Нет, назад в профиль" arrow={false} background="transparent" />
                        </div>
                        <div className="btn">
                            <DefaultBtn text="Да, заблокировать" arrow={false} background="red"/>
                        </div>
                    </div>


                </div>
                
            </div>
        
        
        </>
    )
}

export default BlockUser