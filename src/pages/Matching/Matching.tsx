import React, { useState } from "react";
import SettingsBtn from "../../components/SettingsBtn/SettingsBtn";
import PremiumSearch from "../../components/PremiumSearch/PremiumSearch";
import ToggleBtn from "../../components/ToggleBtn/ToggleBtn";
import SVGIcon from "../../assets/icons/svgComponent";
import SingleRangeSlider from "../../components/SingleRangeSlider/SingleRangeSlider";
import DoubleRangeSlider from "../../components/DoubleRangeSlider/DoubleRange";
import "./Matching.scss"




const Matching = () => {



    const [settingsModal, setSettingsModal] = useState(false);


    
    return (
    
        <>
            <div className="Matching">
                <div className="settingsWrapper">
                    <div className="settings" onClick={() => {setSettingsModal(!settingsModal)}}>
                        <SettingsBtn />
                    </div>
            
                    <div className={`rightSideSettings ${settingsModal ? 'rightSideSettingsActive' : ''}`}>
                        <div className="title">
                            <h3>
                                Настройки Находок
                            </h3>
                            <div className="completeBtn" onClick={() => {setSettingsModal(false)}}>
                                <span>
                                    Готово
                                </span>
                            </div>
                        </div>
                        <div className="listWrapper">
                            <ul>
                                <li className="listValue" style={{alignItems: 'start'}}>
                                    <div className="description">
                                        <span>
                                            Расстояние
                                        </span>
                                    </div>
                                    <SingleRangeSlider min={0} max={100} defaultValue={30}/>
                                </li>
                                <li>
                                    <div className="itemWrapper">
                                        <div className="description">
                                            <span>
                                                Показывать людей только в этом диапазоне
                                            </span>
                                        </div>
                                        <div className="value">
                                            <ToggleBtn/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                <div className="itemWrapper">
                                    <div className="description">
                                        <span>
                                            Показывать меня
                                        </span>
                                    </div>
                                    <div className="value">
                                        <div className="text">
                                                <span>
                                                    Женщины
                                                </span>
                                            </div>
                                            <SVGIcon name="arrowRight" size={20}  />
                                            <div className="underline"></div>
                                    </div>
                                </div>
                                </li>
                                <li className="listValue" style={{alignItems: 'start'}}>
                                    <div className="description">
                                        <span>
                                            Возраст
                                        </span>
                                    </div>
                                    <DoubleRangeSlider />

                                </li>
                                <li>
                                    <div className="itemWrapper">
                                        <div className="description">
                                            <span>
                                                Показывать людей только в этом диапазоне
                                            </span>
                                        </div>
                                        <div className="value">
                                            <ToggleBtn/>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <PremiumSearch />
                        

                    </div>
                    {/* <div className="bottomBlur">
                            
                    </div> */}

                </div>
                

            </div>
        </>
    )

  
}



export default Matching



