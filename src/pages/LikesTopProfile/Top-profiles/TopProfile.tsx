import React from "react";
import SVGIcon from "../../../assets/icons/svgComponent";
import '../LikesTopProfilePage.scss'
import { topProfiles }  from "../../../Data/TopProfiles";
import { ITopProfile } from "../../../model/TopProfileModel";
import {  useDispatch } from "react-redux";
import { likesModalState } from "../../../store/LikesStateSlice";





const TopProfile = () => {


    const dispatch = useDispatch()

  
    
    
    
    return (
        <>
            <div className="page LikesTopProfile">
                <div className="PagesWrapper">
                    <div className="topButtons">
                        <div className="filter" onClick={() => {dispatch(likesModalState('open-likesModal'))}}>

                            <SVGIcon name="filtersBtn" size={20}/>
                        </div>
                        <div className="buttonItem">
                            <span>
                                Поблизости
                            </span>
                        </div>
                        <div className="buttonItem">
                            <span>
                                Есть информация о себе
                            </span>
                        </div>
                        <div className="buttonItem">
                            <span>
                                Фото
                            </span>
                        </div>
                    </div>
                    <div className="bannerGold">
                        <div className="bannerDescription">
                            <p>
                                Перейдите на Fandora Gold, чтобы узнать, 
                                кто поставил Вам лайк.
                            </p>
                        </div>
                        <div className="bannerWrapper">
                            <div className="item">
                                <div className="logo">
                                    <SVGIcon name="goldLogoHeart" size={28}/>

                                </div>
                                <div className="marker">
                                    <span>
                                        GOLD
                                    </span>

                                </div>

                            </div>
                            <div className="item">
                                <div className="goBtn">
                                    <span>
                                        Перейти
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pageGallery">
                        {
                            topProfiles.map((item: ITopProfile) => {
                                
                                return(
                                    <div className="item" key={item.id}>
                                        <div className="userPhoto">
                                            <img src={item.image} alt="user" />
                                        </div>
                                        <div className="topProfileInfo">
                                            <div className="userInfo">
                                                <div className="userName">
                                                    <span className="name">
                                                        {item.userName},&nbsp;
                                                    </span>
                                                    <span className="age"> 
                                                        {item.useAge}
                                                    </span>
                                                </div>
                                                <div className="timeStamp">
                                                    <span>
                                                        Осталось {item.timeStamp}
                                                    </span>
                                                    <span className="hoursMark">
                                                        ч.
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="topProfileMark">
                                                    <SVGIcon name="topProfileMark" size={20}/>
                                            </div>
                                        </div> 
                                    </div>
                                )
                            })
                        }
                    </div> 
                </div>
                
            </div>
            
        </>
        
    )
}



export default TopProfile