import React from "react";
// import SettingsBtn from "../../components/SettingsBtn/SettingsBtn.tsx";
import "./MyProfile.scss"
import SVGIcon from "../../assets/icons/svgComponent";
import { Link } from "react-router-dom";



const MyProfile = () => {

    return (
    
        <>
            <div className="page myProfile">
                <div className="pageItems">
                    <div className="protect">
                        <SVGIcon name="protectIcon" size={24} />
                    </div>
                    <div className="userInfo">
                        <div className="userAvatar">
                            <div className="borderBg"></div>
                            <div className="borderActive"></div>
                            <Link to={'/my-profile/edit-profile'}>
                                <div className="editBtn">
                                    <SVGIcon name="editProfile" size={40} />
                                    <div className="markBtn"></div>
                                </div>
                            </Link>
                            <div className="fillWrapper">
                                <div className="fillInfo">
                                    <span>
                                        100% заполнено
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="userTitle">
                            <div className="titleWrapper">
                                <div className="userName">
                                    <h2>
                                        Alex, 41
                                    </h2>
                                    <SVGIcon name="verificationProfile" size={20} />
                                    
                                </div>
                                <div className="userEmail">
                                    <span>
                                        @pixelwizardalex
                                    </span>
                                </div>

                            </div>
                                
                            </div>
                    </div>
                    <div className="extraBlock">
                        <div className="extraItem likes">
                            <div className="wrapper">
                                <div className="picture">
                                    <SVGIcon name="starIcon" size={25}  />
                                </div>
                                <div className="description">
                                    <span className="numberLike">0</span>
                                    <span>Суперлайков</span>
                                </div>
                                <div className="plusBtn">
                                    <SVGIcon name="plusBtn" size={30}  />
                                </div>
                            </div>

                        </div>
                        <div className="extraItem boost">
                            <div className="wrapper">
                                <div className="picture">
                                    <SVGIcon name="lightningIcon" size={25}  />
                                </div>
                                <div className="description">
                                    <span className="numberLike">0</span>
                                    <span>Бустов</span>
                                </div>
                                <div className="plusBtn">
                                    <SVGIcon name="plusBtn" size={30}  />
                                </div>
                            </div>
                            
                        </div>
                        <div className="extraItem subscribe">
                            <div className="wrapper">
                                <div className="picture">
                                    <SVGIcon name="subscribeIcon" size={25}  />
                                </div>
                                <div className="description">
                                    <span>Подписки</span>
                                </div>
                                <div className="plusBtn">
                                    <SVGIcon name="plusBtn" size={30}  />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="subscriptionsBlock">
                            <div className="subscription gold">
                                <div className="wrapper">
                                    <div className="planTitle">
                                        <div className="logo">
                                            <SVGIcon name="logoVip" className="logo-effect" />
                                            <div className="status">
                                                <span>GOLD</span>
                                            </div>
                                        </div>
                                        <div className="buyBtn">
                                            <span>
                                                Купить подписку
                                            </span>

                                        </div>
                                    </div>
                                    <div className="planOptions top">
                                        <div className="item first">
                                                <h5>
                                                    Что Входит
                                                </h5>     
                                        </div>
                                        <div className="item">
                                            <h5>
                                                Бесплатный
                                            </h5>
                                        </div>
                                        <div className="item">
                                            <h5>
                                                Gold
                                            </h5>

                                        </div>
                                    </div>
                                    <div className="planOptions">
                                        <div className="item first">
                                                <span>
                                                    Просмотр лайков
                                                </span>     
                                        </div>
                                        <div className="item">
                                            <SVGIcon name="freeGold"   size={24} />

                                        </div>
                                        <div className="item gold">
                                            <SVGIcon name="checkboxIcon"   size={15} />

                                         

                                        </div>
                                    </div>
                                    <div className="planOptions">
                                        <div className="item first">
                                                <span>
                                                    Топ-профили
                                                </span>     
                                        </div>
                                        <div className="item">
                                            <SVGIcon name="freeGold"   size={24} />

                                        
                                        </div>
                                        <div className="item gold">
                                            <SVGIcon name="checkboxIcon"   size={15} />

                                        

                                        </div>
                                    </div>
                                    <div className="planOptions">
                                        <div className="item first">
                                                <span>
                                                    5 бесплатных лайков
                                                </span>     
                                        </div>
                                        <div className="item">
                                            <SVGIcon name="freeGold"   size={24} />

                                            
                                        </div>
                                        <div className="item gold">
                                            <SVGIcon name="checkboxIcon"   size={15} />


                                          

                                        </div>
                                    </div>
                                    <div className="watchMore">
                                        <div className="innerBlock">
                                            <span>
                                                Смотреть все функции
                                            </span>
                                            <div className="underline">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="subscription vip">
                                <div className="wrapper">
                                    <div className="planTitle">
                                        <div className="logo">
                                            <SVGIcon name="logoVip" className="logo-effect" />
                                            <div className="status">
                                                <span>VIP</span>
                                            </div>
                                        </div>
                                        <div className="buyBtn">
                                            <span>
                                                Купить подписку
                                            </span>

                                        </div>
                                    </div>
                                    <div className="planOptions top">
                                        <div className="item first">
                                                <h5>
                                                    Что Входит
                                                </h5>     
                                        </div>
                                        <div className="item">
                                            <h5>
                                                Бесплатный
                                            </h5>
                                        </div>
                                        <div className="item">
                                            <h5>
                                                Gold
                                            </h5>

                                        </div>
                                    </div>
                                    <div className="planOptions">
                                        <div className="item first">
                                                <span>
                                                    Приоритетные лайки
                                                </span>     
                                        </div>
                                        <div className="item">
                                            <SVGIcon name="freeGold"   size={24} />

                                        </div>
                                        <div className="item gold">
                                            <SVGIcon name="checkboxIcon"   size={15} />

                                         

                                        </div>
                                    </div>
                                    <div className="planOptions">
                                        <div className="item first">
                                                <span>
                                                    Сообщения до создания пары
                                                </span>     
                                        </div>
                                        <div className="item">
                                            <SVGIcon name="freeGold"   size={24} />

                                        
                                        </div>
                                        <div className="item gold">
                                            <SVGIcon name="checkboxIcon"   size={15} />

                                        

                                        </div>
                                    </div>
                                    <div className="planOptions">
                                        <div className="item first">
                                                <span>
                                                    Просмотр лайков
                                                </span>     
                                        </div>
                                        <div className="item">
                                            <SVGIcon name="freeGold"   size={24} />

                                            
                                        </div>
                                        <div className="item gold">
                                            <SVGIcon name="checkboxIcon"   size={15} />


                                          

                                        </div>
                                    </div>
                                    <div className="watchMore">
                                        <div className="innerBlock">
                                            <span>
                                                Смотреть все функции
                                            </span>
                                            <div className="underline">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="subscription plus">
                                <div className="wrapper">
                                    <div className="planTitle">
                                        <div className="logo">
                                            <SVGIcon name="logoPlus" className="logo-effect" />
                                            <div className="status">
                                                <span>PLUS</span>
                                            </div>
                                        </div>
                                        <div className="buyBtn">
                                            <span>
                                                Купить подписку
                                            </span>

                                        </div>
                                    </div>
                                    <div className="planOptions top">
                                        <div className="item first">
                                                <h5>
                                                    Что Входит
                                                </h5>     
                                        </div>
                                        <div className="item">
                                            <h5>
                                                Бесплатный
                                            </h5>
                                        </div>
                                        <div className="item">
                                            <h5>
                                                Gold
                                            </h5>

                                        </div>
                                    </div>
                                    <div className="planOptions">
                                        <div className="item first">
                                                <span>
                                                    Безлимит лайков
                                                </span>     
                                        </div>
                                        <div className="item">
                                            <SVGIcon name="freePlus"   size={24} />

                                        </div>
                                        <div className="item gold">
                                            <SVGIcon name="checkboxIcon"   size={15} />

                                         

                                        </div>
                                    </div>
                                    <div className="planOptions">
                                        <div className="item first">
                                                <span>
                                                    Перемотка без ограничений
                                                </span>     
                                        </div>
                                        <div className="item">
                                            <SVGIcon name="freePlus"   size={24} />

                                        
                                        </div>
                                        <div className="item gold">
                                            <SVGIcon name="checkboxIcon"   size={15} />

                                        

                                        </div>
                                    </div>
                                    <div className="planOptions">
                                        <div className="item first">
                                                <span>
                                                    Загранпасторт
                                                </span>     
                                        </div>
                                        <div className="item">
                                            <SVGIcon name="freePlus"   size={24} />

                                            
                                        </div>
                                        <div className="item gold">
                                            <SVGIcon name="checkboxIcon"   size={15} />


                                          

                                        </div>
                                    </div>
                                    <div className="watchMore">
                                        <div className="innerBlock">
                                            <span>
                                                Смотреть все функции
                                            </span>
                                            <div className="underline">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                    </div>

                </div>
            </div>
        </>
    )
    
}

export default MyProfile