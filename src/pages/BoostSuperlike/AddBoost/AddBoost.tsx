import React from "react";
import SVGIcon from "../../../assets/icons/svgComponent";
import DefaultBtn from "../../../components/DefaultBtn/DefaultBtn";
import { useNavigate } from "react-router-dom";
import boostsImg from '../../../assets/images/boosts.png'
import '../BoostSuperLike.scss'



const AddBoost = () => {


    const navigate = useNavigate();

    return (
        <>
            <div className="page Boosts">
                <div className="superLikeWrapper">
                    <div className="topItem">
                        <div className="title">
                            <h3>
                                Нужны Бусты?
                            </h3>
                        </div>
                        <div className="cancelBtn" onClick={() => navigate(-1)}>
                                    <SVGIcon name="cancelBtn" size={20}/>

                        </div>

                    </div>
                    <div className="superLikeBanner boostBanner">
                        <div className="bannerTitle">
                            <span className="colorText">
                                Тебя заметят!
                            </span>
                        </div>
                        <div className="bannerImg">
                            <img src={boostsImg} alt="boosts" />

                        </div>
                    </div>
                    <div className="cardWrapper">
                        <div className="title">
                            <h3>
                                Подними свой профиль в топ в выбранной зоне поиска на 30 минут, чтобы найти больше пар!
                            </h3>
                        </div>
                        <div className="itemWrapper">
                            <div className="item">
                                <div className="itemTitle">
                                    <span>
                                        Популярно
                                    </span>
                                </div>
                                <div className="quantityLikes">
                                    <h2>
                                        10 Бустов
                                    </h2>

                                    
                                </div>
                                <div className="description">
                                    <span>
                                        3 $ / за 1шт.
                                    </span>
                                </div>
                                <div className="summaryInfo">
                                    <div className="summary">
                                        <span>
                                            Итого: 29,99 $
                                        </span>
                                    </div>
                                    <div className="discount">
                                        <span>
                                            СКИДКА 25%
                                        </span>
                                    </div>
                                </div>
                                <DefaultBtn background="roseAquaGradient" arrow={true} text="Выбрать"/>
                            </div>
                            <div className="item">
                                <div className="itemTitle">
                                    <span>
                                        Популярно
                                    </span>
                                </div>
                                <div className="quantityLikes">
                                    <h2>
                                        30 Бустов
                                    </h2>
                                    
                                </div>
                                <div className="description">
                                    <span>
                                        2,5 $ / за 1шт.
                                    </span>
                                </div>
                                <div className="summaryInfo">
                                    <div className="summary">
                                        <span>
                                            Итого: 46,99 $
                                        </span>
                                    </div>
                                    <div className="discount">
                                        <span>
                                            СКИДКА 22%
                                        </span>
                                    </div>
                                </div>
                                <DefaultBtn background="roseAquaGradient" arrow={true} text="Выбрать"/>
                            </div>
                        </div>
                    </div>
                    <div className="breakLine">
                        <span>
                            или
                        </span>
                    </div>
                    <div className="goldPlanBanner">
                        <div className="logo">
                            <SVGIcon name="logoGold" className="logo-effect" />
                            <div className="marker">
                                <span>
                                    GOLD
                                </span>
                            </div>

                        </div>
                        <div className="description">
                            <p>
                                1 бесплатный буст в месяц
                            </p>
                            <div className="goBtn">
                                <span>
                                    Перейти
                                </span>
                            </div>
                            
                            
                        </div>
                    </div>


                </div>
                
            </div>
        </>
    )
}




export default AddBoost