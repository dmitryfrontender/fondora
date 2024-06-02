import React from "react";
import './Report.scss'
import SVGIcon from "../../assets/icons/svgComponent";
import DefaultBtn from "../DefaultBtn/DefaultBtn";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setReportPage } from "../../store/ProtectSlice";

const Report = () => {

    const userName = useSelector((state: any) => state.ProtectState.userName);
    const userAvatar = useSelector((state: any) => state.ProtectState.userAvatar);

    const navigate = useNavigate()
    // const location = useLocation();

    const goBack = () => {
        setReportPage(false)
        navigate(-1)

    }




    return (
        <div className="Report">
            <div className="wrapper">
                <div className="topBlock">
                    <div className="backBtn" onClick={() => goBack()}>
                        <button>
                            <SVGIcon name="arrowLeft"  size={20}/>
                        </button>
                    </div>
                    <div className="flag">
                        <SVGIcon name="flagBtn"  size={25}/>
                    </div>
                    <div className="cancelBtn">
                        <button>
                            <span>
                                Отмена

                            </span>
                        </button>
                    </div>
                </div>
                <div className="progressBar">
                    <div className="item">
                        <span>
                            Причина
                        </span>
                        <div className="border border-left border-active"></div>
                    </div>
                    <div className="item">
                        <span>
                            Подробности
                        </span>
                        <div className="border"></div>
                    </div>
                    <div className="item">
                        <span>
                            Отправить
                        </span>
                        <div className="border border-right"></div>
                    </div>
                </div>
                <div className="tittle">
                    <h2>
                        О чем ты хочешь сообщить нам?
                    </h2>
                </div>
                <div className="formComplain">
                    <div className="item">
                        <span>
                            Информация о пользователе
                        </span>
                    </div>
                    <div className="item">
                        <span>
                            Фото профиля
                        </span>
                    </div>
                    <div className="item">
                        <span>
                            Что-то произошло вне Fondora или при личной встрече
                        </span>
                    </div>


                </div>
                <div className="hrElement"></div>
                <div className="moreInfo">
                    <div className="image">
                       <div className="pin"></div>
                       <div className="pin"></div>
                       <div className="pin"></div>
                        
                    </div>
                    <span>
                        Если ты хочешь пожаловаться на что-то еще в профиле этого человека, ты можешь
                        вернуться в его профиль и найти причину
                        жалобы. Нажми на значок с тремя точками и выбери «Пожаловаться».

                    </span>
                </div>
                <div className="note">
                    <img src={userAvatar} alt="avatar" />
                    <span>
                        {userName} не узнает о твоей балобе

                    </span>
                </div>
                <DefaultBtn text="Далее" background="red" arrow={true} />
            </div>
        </div>
    );
};

export default Report;