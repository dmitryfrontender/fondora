import React, { useEffect, useRef } from "react";
import './ShareProfile.scss'
import SVGIcon from "../../../assets/icons/svgComponent";
import { shareProfileState } from "../../../store/ShareProfileSlice"
import { useDispatch } from "react-redux";



const ShareProfile = () => {

    const dispatch = useDispatch();
    const ref = useRef<HTMLInputElement>(null);



    const handleClickOutside = (e: any) => {
        
        if (e.target.className === ref.current?.className) {
            dispatch(shareProfileState(false));
        }
    };



    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    });



    return(
        <>
            <div className="ShareProfile Modal" ref={ref}>
                <div className="modalWrapper">
                    <div className="icon">
                        <SVGIcon name="shareProfileIcon" size={30}/>
                    </div>
                    <div className="tittle">
                        <h2>
                            Поделиться профилем
                        </h2>
                    </div>
                    <div className="socialsList">
                        <div className="item">
                            <div className="icon">
                                <SVGIcon name="vk" size={30}/>
                            </div>
                            <span>
                                VK
                            </span>
                        </div>
                        <div className="item">
                             <div className="icon">
                                <SVGIcon name="tg" size={30}/>
                            </div>
                            <span>
                                Telegram
                            </span>
                        </div>
                        <div className="item">
                             <div className="icon">
                                <SVGIcon name="yandex" size={30}/>
                            </div>
                            <span>
                                Yandex
                            </span>
                        </div>
                        <div className="item">
                             <div className="icon">
                                <SVGIcon name="mail" size={25}/>
                            </div>
                            <span>
                                Email
                            </span>
                        </div>
                    </div>
                    <div className="copyLink">
                        <div className="icon">
                            <SVGIcon name="copyLink" size={25}/>
                        </div>
                        <span>
                            Скопировать ссылку
                        </span>
                    </div>
                </div>
              

            </div>
        
        </>
    )
}


export default ShareProfile