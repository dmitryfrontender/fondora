import React from "react";
import './Settings.scss'
import GoBtn from "../../components/goBtn/GoBtn.tsx";
import {Icon} from "../../assets/icons/icons";
import StarSvg from "../../assets/icons/Star.svg";
import BoostSvg from "../../assets/icons/Boost.svg";
import HideSvg from "../../assets/icons/Hide.svg";


const Settings = () => {

    return (
        <div className="Settings">
            <div className="tittle">
                <span>
                    Настройки
                </span>
            </div>
            <div className="SettingsWrapper">
                <div className="planSettings">
                    <div className="planOption plan-vip">
                        <div className="logo">
                            <Icon id="logo-vip" className="logo-effect" />
                            <div className="status">
                                <span>VIP</span>
                            </div>
                        </div>
                        <div className="description">
                            <p>
                                Приоритет лайков, просмотр лайков и другое!
                            </p>
                            <GoBtn/>
                        </div>
                    </div>
                    <div className="planOption plan-gold">
                        <div className="logo">
                            <Icon id="logo-gold" className="logo-effect" />
                            <div className="status">
                                <span>GOLD</span>
                            </div>
                        </div>
                        <div className="description">
                            <p>
                                Узнай, кто тебя лайкнул, и многое другое!
                            </p>
                            <GoBtn/>
                        </div>
                    </div>
                    <div className="planOption plan-plus">
                        <div className="logo">
                            <Icon id="logo-plus" className="logo-effect" />
                            <div className="status">
                                <span>PLUS</span>
                            </div>
                        </div>
                        <div className="description">
                            <p>
                                Безлимит лайков и многое другое!
                            </p>
                            <GoBtn/>
                        </div>
                    </div>
                </div>
                <div className="likeBoost">
                    <div className="likes">
                        <div className="picture">
                            <img src={StarSvg} alt="img" />
                        </div>
                        <div className="description">
                            <span className="numberLike">40</span>
                            <span>Суперлайков</span>


                        </div>
                    </div>
                    <div className="boost">
                        <div className="picture">
                            <img src={BoostSvg} alt="img" />
                        </div>
                        <div className="description">
                            <span className="numberBoost">145</span>
                            <span>Бустов</span>
                            
                        </div>
                    </div>
                    <div className="unwatchingMode">
                        <img src={HideSvg} alt="img" />

                        <span>Перейти в невидимый режим</span>
                    </div>
                    

                </div>
                

            </div>
            
                

                

            
        </div>
    )
}

export default Settings