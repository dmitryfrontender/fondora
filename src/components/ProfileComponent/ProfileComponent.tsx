import React from "react";
import './ProfileComponent.scss'
import PhotoSlider from "./PhotoSlider/PhotoSlider";
import SVGIcon from "../../assets/icons/svgComponent";
// import { useParams } from "react-router-dom";

import { sliderProfiles }  from "../../Data/SliderProfiles";
// import { ISliderProfile } from "../../model/SliderProfileModel";

const ProfileComponent = (props: any) => {

    const activeUser = sliderProfiles[0];

    return (
        <>
            <div className="ProfileComponent">

                <PhotoSlider images={activeUser.images} />

                <div className="ProfileComponentInfo">
                    <div className="ProfileComponentMainInfo">
                        <span className="name">
                            {activeUser.userName}
                        </span>
                        <span className="age">
                            {activeUser.userAge}
                        </span>
                        <SVGIcon name="fillVerification" size={16} />
                    </div>
                    <div className="ProfileComponentAdditionalInfo">
                        <ul>
                            <li>
                                <SVGIcon name="homeIcon" size={14} />
                                <span>{activeUser.userLocation}</span>
                            </li>
                            <li>
                                <SVGIcon name="distanceIcon" size={14} />
                                <span>9 km from you</span>
                            </li>
                            <li>
                                <SVGIcon name="tall" size={14} />
                                <span>178 см</span>
                            </li>
                            <li>
                                <SVGIcon name="femaleGender" size={14} />
                                <span>Гетеро Женщина</span>
                            </li>
                        </ul>
                    </div>
                    <div className="ProfileComponentDescriptionInfo">
                        <p>
                            Не люблю длинные переписки( лучше увидимся на нашем первом свидании.
                            Пригласить можешь в заведение. Гулять п...
                        </p>
                    </div>
                    <div className="ProfileComponentSearching">
                        <span className="ProfileComponentSearchingBlock">
                            <span className="ProfileComponentSearchingIcon">💖</span>
                            <div className="ProfileComponentSearchingText">
                                <span className="ProfileComponentSearchingTitle">Я ищю</span>
                                <span className="ProfileComponentSearchingSubTitle">Долгосрочный партнер</span>
                            </div>
                        </span>
                    </div>
                    <div className="ProfileComponentSignInfo">
                        <div className="ProfileComponentTitle">Основное</div>
                        <ul className="ProfileComponentLabelsList">
                            <li>
                                <div className="tag">
                                    <SVGIcon name="signGemini" size={16} />
                                    <span>Близнецы</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="ProfileComponentStyleInfo">
                        <div className="ProfileComponentTitle">Стиль жизни</div>
                        <ul className="ProfileComponentLabelsList">
                            <li>
                                <div className="tag">
                                    <SVGIcon name="wineIcon" size={16} />
                                    <span>Я не пью</span>
                                </div>
                            </li>
                            <li>
                                <div className="tag">
                                    <SVGIcon name="smokingIcon" size={16} />
                                    <span>Не курю</span>
                                </div>
                            </li>
                            <li>
                                <div className="tag">
                                    <SVGIcon name="gymIcon" size={16} />
                                    <span>Часто</span>
                                </div>
                            </li>
                            <li>
                                <div className="tag">
                                    <SVGIcon name="pizzaIcon" size={16} />
                                    <span>Другое</span>
                                </div>
                            </li>
                            <li>
                                <div className="tag">
                                    <SVGIcon name="emailIcon" size={16} />
                                    <span>Просто смотрю</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="ProfileComponentInterestsInfo">
                        <div className="ProfileComponentTitle">Мои интересы</div>
                        <ul className="ProfileComponentLabelsList">
                            <li>
                                <div className="tag">
                                    <span>Йога</span>
                                </div>
                            </li>
                            <li>
                                <div className="tag">
                                    <span>Музыка</span>
                                </div>
                            </li>
                            <li>
                                <div className="tag">
                                    <span>Кофе</span>
                                </div>
                            </li>
                            <li>
                                <div className="tag">
                                    <span>Медитация</span>
                                </div>
                            </li>
                            <li>
                                <div className="tag">
                                    <span>Духовность</span>
                                </div>
                            </li>
                            <li>
                                <div className="tag">
                                    <span>Гарри Поттер</span>
                                </div>
                            </li>
                            <li>
                                <div className="tag">
                                    <span>Транс</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="ProfileComponentMessageBlock">
                        <span className="ProfileComponentMessageIcon">
                            <SVGIcon name="messageIcon" size={20} />
                        </span>
                        <span className="ProfileComponentMessageText">
                            <span className="ProfileComponentMessageTitle">Jessica Black ждет твоего сообщения! </span>
                            <span className="ProfileComponentMessageSubTitle">Добавь его к суперлайку и увеличь шансы создать пару на 25%.</span>
                        </span>
                        <input type="text" />
                    </div>
                    <div className="ProfileComponentButtons">
                        <span className="ProfileComponentButtonsBlock">
                            <span className="ProfileComponentButtonsIcon">
                                <SVGIcon name="shareProfile" size={20} />
                            </span>
                            <div className="ProfileComponentButtonsText">
                                <span className="ProfileComponentButtonsTitle">Поделиться профилем</span>
                                <span className="ProfileComponentButtonsSubTitle">Узнай, что думают друзья.</span>
                            </div>
                        </span>
                        <span className="ProfileComponentButtonsBlock">
                            <span className="ProfileComponentButtonsIcon">
                                <SVGIcon name="blockProfile" size={20} />
                            </span>
                            <div className="ProfileComponentButtonsText">
                                <span className="ProfileComponentButtonsTitle">Заблокировать Jessica Black</span>
                                <span className="ProfileComponentButtonsSubTitle">Вы больше не будете видеть друг друга.</span>
                            </div>
                        </span>
                        <span className="ProfileComponentButtonsBlock">
                            <span className="ProfileComponentButtonsIcon">
                                <SVGIcon name="reportProfile" size={20} />
                            </span>
                            <div className="ProfileComponentButtonsText">
                                <span className="ProfileComponentButtonsTitle">Пожаловаться на  Jessica Black</span>
                                <span className="ProfileComponentButtonsSubTitle">Пользователь об этом не узнает.</span>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileComponent