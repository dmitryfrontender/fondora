import React from "react";
import '../BoostSuperLike.scss'
import { useNavigate } from "react-router-dom";
import SVGIcon from "../../../assets/icons/svgComponent";
import superlikeStars from '../../../assets/images/SuperLikeStars.png'
import DefaultBtn from "../../../components/DefaultBtn/DefaultBtn";



const SuperLike = () => {

    const navigate = useNavigate();




    return(
        <>
            <div className="page SuperLikes">
                <div className="superLikeWrapper">
                    <div className="topItem">
                        <div className="title">
                            <h3>
                                Нужны Суперлайки?
                            </h3>
                        </div>
                        <div className="cancelBtn" onClick={() => navigate(-1)}>
                                    <SVGIcon name="cancelBtn" size={20}/>

                        </div>

                    </div>
                    <div className="superLikeBanner">
                        <div className="bannerTitle">
                            <span className="colorText">
                                Стань заметнее 
                            </span>
                            <span>
                                &nbsp; с суперлайком!
                            </span>
                        </div>
                        <div className="bannerImg">
                            <img src={superlikeStars} alt="stars" />

                        </div>
                    </div>
                    <div className="cardWrapper">
                        <div className="title">
                            <h3>
                                У тебя будет в 3 раза больше шансов найти пару!
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
                                        15 Суперлайков
                                    </h2>

                                    
                                </div>
                                <div className="description">
                                    <span>
                                        3,13 $ / за 1шт.
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
                            <div className="item">
                                <div className="itemTitle">
                                    <span>
                                        Популярно
                                    </span>
                                </div>
                                <div className="quantityLikes">
                                    <h2>
                                        15 Суперлайков
                                    </h2>
                                    
                                </div>
                                <div className="description">
                                    <span>
                                        3,13 $ / за 1шт.
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
                                Включает 5 бесплатных суперлайков в неделю
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



export default SuperLike