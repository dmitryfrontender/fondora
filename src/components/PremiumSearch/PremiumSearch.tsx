import React from "react";
import './PremiumSearch.scss'
import SVGIcon from "../../assets/icons/svgComponent";
import ToggleBtn from "../ToggleBtn/ToggleBtn.tsx";



const PremiumSearch = () => {
    return(
        <>
            <div className="PremiumSearch">
                <div className="wrapper">
                    <div className="tittle">
                        <div className="titleItem">
                            <h3>
                                Премиум - находки
                            </h3>
                        </div>
                        <div className="goldMarker">
                            <span>
                                GOLD
                            </span>
                        </div>
                    </div>
                    <div className="description">
                        <p>
                            Настройки показывают людей со схожими предпочтениями, 
                            но не ограничивают предложения: ты по-прежнему 
                            будешь видеть людей с другими интересами.
                        </p>
                    </div>
                    <div className="searchList">
                        <ul>
                            <li className="quantityPhotos">
                                <div className="text">
                                    <p>
                                        Минимальное количество фото
                                    </p>
                                </div>

                            </li>
                            <li>
                                <div className="description">
                                    <div className="text">
                                        <span>
                                            Интересы
                                        </span>
                                    </div>
                                </div>
                                <div className="value">   
                                    <ToggleBtn/>
                                </div>

                            </li>
                            <li>
                                <div className="description">
                                        <SVGIcon name="eyeIcon" size={20} />
                                    <div className="text">
                                        <span>
                                            Я ищу
                                        </span>
                                    </div>
                                </div>
                                <div className="value">
                                    <div className="text">
                                        <span>
                                            Выбрать
                                        </span>
                                    </div>
                                    <SVGIcon name="arrowRight" size={20}  />
                                    <div className="underline"></div>
                                </div>
                            </li>
                            <li>
                                <div className="description">
                                        <SVGIcon name="addLang" size={20} />
                                    <div className="text">
                                        <span>
                                            Добавить языки
                                        </span>
                                    </div>
                                </div>
                                <div className="value">
                                    <div className="text">
                                        <span>
                                            Выбрать
                                        </span>
                                    </div>
                                    <SVGIcon name="arrowRight" size={20}  />
                                    <div className="underline"></div>
                                </div>
                            </li>
                            <li>
                                <div className="description">
                                        <SVGIcon name="zodiac" size={20} />
                                    <div className="text">
                                        <span>
                                            Знак зодиака
                                        </span>
                                    </div>
                                </div>
                                <div className="value">
                                    <div className="text">
                                        <span>
                                            Выбрать
                                        </span>
                                    </div>
                                    <SVGIcon name="arrowRight" size={20}  />
                                    <div className="underline"></div>
                                </div>
                            </li>
                            <li>
                                <div className="description">
                                        <SVGIcon name="education" size={20} />
                                    <div className="text">
                                        <span>
                                            Образование
                                        </span>
                                    </div>
                                </div>
                                <div className="value">
                                    <div className="text">
                                        <span>
                                            Выбрать
                                        </span>
                                    </div>
                                    <SVGIcon name="arrowRight" size={20}  />
                                    <div className="underline"></div>
                                </div>

                            </li>
                            <li>
                                <div className="description">
                                        <SVGIcon name="planFamily" size={20} />
                                    <div className="text">
                                        <span>
                                            Планы на семью
                                        </span>
                                    </div>
                                </div>
                                <div className="value">
                                    <div className="text">
                                        <span>
                                            Выбрать
                                        </span>
                                    </div>
                                    <SVGIcon name="arrowRight" size={20}  />
                                    <div className="underline"></div>
                                </div>

                            </li>
                            <li>
                                <div className="description">
                                        <SVGIcon name="covidVaccine" size={20} />
                                    <div className="text">
                                        <span>
                                            Вакцина от COVID
                                        </span>
                                    </div>
                                </div>
                                <div className="value">
                                    <div className="text">
                                        <span>
                                            Выбрать
                                        </span>
                                    </div>
                                    <SVGIcon name="arrowRight" size={20}  />
                                    <div className="underline"></div>
                                </div>
                            </li>
                            <li>
                                <div className="description">
                                        <SVGIcon name="typePerson" size={20} />
                                    <div className="text">
                                        <span>
                                            Тип личности
                                        </span>
                                    </div>
                                </div>
                                <div className="value">
                                    <div className="text">
                                        <span>
                                            Выбрать
                                        </span>
                                    </div>
                                    <SVGIcon name="arrowRight" size={20}  />
                                    <div className="underline"></div>
                                </div>

                            </li>
                            <li>
                                <div className="description">
                                        <SVGIcon name="styleChatting" size={20} />
                                    <div className="text">
                                        <span>
                                            Стиль общения
                                        </span>
                                    </div>
                                </div>
                                <div className="value">
                                    <div className="text">
                                        <span>
                                            Выбрать
                                        </span>
                                    </div>
                                    <SVGIcon name="arrowRight" size={20}  />
                                    <div className="underline"></div>
                                </div>

                            </li>
                            <li>
                                <div className="description">
                                        <SVGIcon name="loveLanguage" size={20} />
                                    <div className="text">
                                        <span>
                                            Язык любви
                                        </span>
                                    </div>
                                </div>
                                <div className="value">
                                    <div className="text">
                                        <span>
                                            Выбрать
                                        </span>
                                    </div>
                                    <SVGIcon name="arrowRight" size={20}  />
                                    <div className="underline"></div>
                                </div>
                            </li>
                            <li>
                                <div className="description">
                                        <SVGIcon name="pets" size={20} />
                                    <div className="text">
                                        <span>
                                            Питомцы
                                        </span>
                                    </div>
                                </div>
                                <div className="value">
                                    <div className="text">
                                        <span>
                                            Выбрать
                                        </span>
                                    </div>
                                    <SVGIcon name="arrowRight" size={20}  />
                                    <div className="underline"></div>
                                </div>

                            </li>
                            <li>
                                <div className="description">
                                        <SVGIcon name="alcohol" size={20} />
                                    <div className="text">
                                        <span>
                                            Алкоголь
                                        </span>
                                    </div>
                                </div>
                                <div className="value">
                                    <div className="text">
                                        <span>
                                            Выбрать
                                        </span>
                                    </div>
                                    <SVGIcon name="arrowRight" size={20}  />
                                    <div className="underline"></div>
                                </div>
                            </li>
                            <li>
                                <div className="description">
                                        <SVGIcon name="smoking" size={20} />
                                    <div className="text">
                                        <span>
                                            Как часто ты куришь?
                                        </span>
                                    </div>
                                </div>
                                <div className="value">
                                    <div className="text">
                                        <span>
                                            Выбрать
                                        </span>
                                    </div>
                                    <SVGIcon name="arrowRight" size={20}  />
                                    <div className="underline"></div>
                                </div>
                            </li>
                            <li>
                                <div className="description">
                                        <SVGIcon name="gym" size={20} />
                                    <div className="text">
                                        <span>
                                            Тренировка
                                        </span>
                                    </div>
                                </div>
                                <div className="value">
                                    <div className="text">
                                        <span>
                                            Выбрать
                                        </span>
                                    </div>
                                    <SVGIcon name="arrowRight" size={20}  />
                                    <div className="underline"></div>
                                </div>

                            </li>
                            <li>
                                <div className="description">
                                        <SVGIcon name="food" size={20} />
                                    <div className="text">
                                        <span>
                                            Предпочтения в еде
                                        </span>
                                    </div>
                                </div>
                                <div className="value">
                                    <div className="text">
                                        <span>
                                            Выбрать
                                        </span>
                                    </div>
                                    <SVGIcon name="arrowRight" size={20}  />
                                    <div className="underline"></div>
                                </div>
                            </li>
                            <li>
                                <div className="description">
                                        <SVGIcon name="socialMedia" size={20} />
                                    <div className="text">
                                        <span>
                                            Соцсети
                                        </span>
                                    </div>
                                </div>
                                <div className="value">
                                    <div className="text">
                                        <span>
                                            Выбрать
                                        </span>
                                    </div>
                                    <SVGIcon name="arrowRight" size={20}  />
                                    <div className="underline"></div>
                                </div>
                            </li>
                            <li>
                                <div className="description">
                                        <SVGIcon name="dream" size={20} />
                                    <div className="text">
                                        <span>
                                            Привычки во сне
                                        </span>
                                    </div>
                                </div>
                                <div className="value">
                                    <div className="text">
                                        <span>
                                            Выбрать
                                        </span>
                                    </div>
                                    <SVGIcon name="arrowRight" size={20}  />
                                    <div className="underline"></div>

                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    )
}





export default PremiumSearch