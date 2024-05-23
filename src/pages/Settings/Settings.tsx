import React, { useEffect } from "react";
import './Settings.scss'
import GoBtn from "../../components/goBtn/GoBtn";
import SVGIcon from "../../assets/icons/svgComponent.jsx";
import PremiumSearch from "../../components/PremiumSearch/PremiumSearch";
import ToggleBtn from "../../components/ToggleBtn/ToggleBtn";
import Checkbox from "../../components/Checkbox/Checkbox";
import { Link } from "react-router-dom";
import DoubleRange from "../../components/DoubleRangeSlider/DoubleRange";
import SingleRangeSlider from "../../components/SingleRangeSlider/SingleRangeSlider";
import { useDispatch } from "react-redux";
import { boostModalState } from "../../store/BoostSlice";
import { useNavigate } from "react-router-dom";



const Settings = () => {




    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        window.history.scrollRestoration = 'manual'


    }, []);



    // const settingPageWrapper = () => {
        
    // }

    useEffect(() => {

        return () => {
            const pageWrapper = document.querySelector('.pageWrapper');
            (pageWrapper as HTMLElement).style.top = '60px';


        }
            
        

    }, [])

    return (
        <div className="page Settings">
            
            <div className="tittle">
                <div className="backBtn" onClick={() => navigate(-1)}>
                    <SVGIcon name="arrowLeft" size={25}/>
                </div>
                <span>
                    Настройки
                </span>
            </div>
            <div className="pageItems">
                <div className="planSettings">
                    <div className="planOption plan-vip">
                        <div className="wrapper">
                            <div className="logo">
                                <SVGIcon name="logoVip" className="logo-effect" />
                                <div className="status">
                                    <span>VIP</span>
                                </div>
                            </div>
                            <div className="planDescription">
                                <p>
                                    Приоритет лайков, просмотр лайков и другое!
                                </p>
                                <Link to={'/my-profile/vip-subscription'}>
                                    <GoBtn/>
                                </Link>
                            </div>
                        </div>
                        <div className="mobileDescription">
                            <p>
                                Приоритет лайков, просмотр лайков и другое!
                            </p>

                        </div>
                        
                    </div>
                    <div className="planOption plan-gold">
                        <div className="wrapper">
                            <div className="logo">
                                <SVGIcon name="logoGold" className="logo-effect" />
                                <div className="status">
                                    <span>GOLD</span>
                                </div>
                            </div>
                            <div className="planDescription">
                                <p>
                                    Узнай, кто тебя лайкнул, и многое другое!
                                </p>
                                <Link to={'/my-profile/gold-subscription'}>
                                    <GoBtn/>
                                </Link>
                            </div>
                        </div>
                        <div className="mobileDescription">
                            <p>
                                Узнай, кто тебя лайкнул, и многое другое!
                            </p>
                            
                        </div>
                    </div>
                    <div className="planOption plan-plus">
                        <div className="wrapper">
                            <div className="logo">
                                <SVGIcon name="logoPlus" className="logo-effect" />
                                <div className="status">
                                    <span>PLUS</span>
                                </div>
                            </div>
                            <div className="planDescription">
                                <p>
                                    Безлимит лайков и многое другое!
                                </p>
                                <Link to={'/my-profile/plus-subscription'}>
                                    <GoBtn/>
                                </Link>
                            </div>
                        </div>
                        <div className="mobileDescription">
                            <p>
                                Безлимит лайков и многое другое!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="likeBoost">
                    <div className="likes">
                        <div className="wrapper">
                            <div className="picture">
                                <SVGIcon name="starIcon" size={50}  />
                            </div>
                            <div className="description">
                                <span className="numberLike">40</span>
                                <span>Суперлайков</span>
                            </div>
                            <Link to={'/settings/super-likes'}>
                                <div className="plusBtn">
                                    <SVGIcon name="plusBtn" size={30}  />
                                </div>
                            </Link>
                            
                        </div>
                        
                        
                    </div>
                    <div className="boost">
                        <div className="wrapper">
                            <div className="picture">
                                {/* <img src={BoostSvg} alt="img" /> */}
                                {/* <Icon id="boost-icon" className="boost-icon" /> */}
                                <SVGIcon name="lightningIcon"   size={50}  />
                            </div>
                            <div className="description">
                                <span className="numberBoost">145</span>
                                <span>Бустов</span>
                            </div>
                            {/* <Link to={'/settings/boosts'}> */}
                                <div className="plusBtn" onClick={() => {dispatch(boostModalState('open-boostModal'))}}>
                                    <SVGIcon name="plusBtn" size={30}  />
                                </div>
                            {/* </Link> */}
                            
                        </div>
                       
                    </div>
                    <div className="unwatchMode">
                        <div className="wrapper">
                            <SVGIcon name="unwatchMode" size={30}  />
                            <span>Перейти в невидимый режим</span>
                        </div>
                        
                    </div>


                </div>
                <div className="accountSettings">
                    <div className="wrapper">
                        <div className="title">
                            <h3>
                                Настройки аккаунта
                            </h3>
                        </div>
                        <div className="subtitle">
                            <p>
                                Подтвержденный номер телефона и адрес электронной почты помогают защитить Ваш аккаунт.
                            </p>
                        </div>
                        <div className="listWrapper">
                        {/* <div className="optionList"> */}

                            <ul>
                                <li>
                                    <div className="itemWrapper">
                                        <div className="description">
                                            <span>
                                                Номер телефона

                                            </span>
                                        </div>
                                        <div className="value">
                                            <div className="item">
                                                <span>
                                                    +1 063 374 99 99
                                                </span>
                                            </div>
                                            <div className="arrow">
                                                <SVGIcon name="arrowRight" size={20}  />
                                                <div className="underline"></div>

                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="itemWrapper">
                                        <div className="description">
                                            <span>
                                                Подключенные аккаунты
                                            </span>
                                        </div>
                                        <div className="value">
                                            <div className="arrow">
                                                <SVGIcon name="arrowRight" size={20}  />
                                                <div className="underline"></div>
                                            </div>
                                        </div>
                                    </div>      
                                </li>
                                <li>
                                    <div className="itemWrapper">
                                        <div className="description">
                                            <span>
                                                Email
                                            </span>
                                        </div>
                                        <div className="value">
                                            <div className="item">
                                                <span>
                                                    silvervenny@gmail.com
                                                </span>
                                            </div>
                                            <div className="arrow">
                                                <SVGIcon name="arrowRight" size={20}  />    
                                                <div className="underline"></div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>
                <PremiumSearch/>

                <div className="title">
                    <h3>
                        Находки
                    </h3>
                </div>
                <div className="description">
                    <p>
                        Подтвержденный номер телефона и адрес электронной почты помогают защитить Ваш аккаунт.
                    </p>
                </div>

                <div className="listWrapper">
                    <ul>
                        <li style={{alignItems: 'start'}}>
                            <div className="itemWrapper">
                                <div className="description" >
                                    <span>
                                        Место
                                    </span>
                                </div>
                                <div className="value">
                                    <div className="item">
                                        <p>
                                            Мое текущее местоположение
                                        </p>
                                        <h4>
                                            New Jersey. New York, NY
                                        </h4>
                                    </div>
                                    <div className="arrow">
                                        <SVGIcon name="arrowRight" size={20}  />
                                        <div className="underline"></div>
                                    </div>

                                </div>

                            </div>
                            
                        </li>
                        <li className="listValue" style={{alignItems: 'start'}}>
                            <div className="description">
                                <span>
                                    Расстояние
                                </span>
                            </div>
                            <SingleRangeSlider min={0} max={100} defaultValue={50}/>
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
                        <li className="listValue" style={{alignItems: 'start'}}>
                            <div className="description">
                                <span>
                                    Возраст
                                </span>
                            </div>
                            <DoubleRange/>

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
                                        Глобальный
                                    </span>
                                </div>
                                <div className="value">
                                    <ToggleBtn/>
                                </div>
                            </div>
                            
                            <div className="optionDescription">
                                <p>
                                    Глобальный режим позволяет искать пары как неподалёку от вас, так и по всему миру.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="title gold">
                    <h3>
                        Кого видишь ты
                    </h3>
                    <div className="plusSign">
                        <span>
                            PLUS
                        </span>
                    </div>
                </div>
                <div className="listWrapper">
                    <ul>
                        <li>
                            <div className="itemWrapper">
                                <div className="description">
                                    <span>
                                    Оптимальные рекомендации
                                    </span>
                                </div>
                                <div className="value">
                                    <Checkbox/>
                                </div>
                            </div>
                            <div className="optionDescription">
                                <p>
                                    Показываются наиболее подходящие тебе люди (по умолчанию)
                                </p>
                            </div>
                            
                        </li>
                        <li>
                            <div className="itemWrapper">
                                <div className="description">
                                    <span>
                                        Недавно активные
                                    </span>
                                </div>
                                <div className="value">
                                    <Checkbox/>
                                </div>
                            </div>
                            <div className="optionDescription">
                                <p>
                                    Первыми показываются самые активные за последнее время пользователи
                                </p>
                            </div>
                            
                        </li>
                    </ul>
                </div>
                <div className="title gold">
                    <h3>
                        Управление видимостью
                    </h3>
                    {/* <div className="plusSign">
                        <span>
                            PLUS
                        </span>
                    </div> */}
                </div>
                <div className="listWrapper">
                    <ul>
                        <li>
                            <div className="itemWrapper">
                                <div className="description">
                                    <span>
                                        Стандартно
                                    </span>
                                </div>
                                <div className="value">
                                    <Checkbox/>
                                </div>
                            </div>
                            <div className="optionDescription">
                                <p>
                                    Показываются наиболее подходящие тебе люди (по умолчанию)
                                </p>
                            </div>
                            
                        </li>
                        <li>
                            <div className="itemWrapper">
                                <div className="description">
                                    <span>
                                        Инкогнито
                                    </span>
                                </div>
                                <div className="value">
                                    <div className="plusSign" style={{marginRight: '10px'}}>
                                        <span>
                                            PLUS
                                        </span>
                                    </div>
                                    <Checkbox/>
                                </div>
                            </div>
                            <div className="optionDescription">
                                <p>
                                    Показываются наиболее подходящие тебе люди (по умолчанию)
                                </p>
                            </div>
                            
                        </li>
                    </ul>
                </div>
                <div className="title ">
                    <h3>
                        Управление видимостью
                    </h3>
                    
                </div>
                <div className="listWrapper">
                    <ul>
                        <li>
                            <div className="itemWrapper">
                                <div className="description">
                                    <span>
                                        Активировать находки
                                    </span>
                                </div>
                                <div className="value">
                                    <ToggleBtn/>
                                </div>
                            </div>
                            <div className="optionDescription">
                                <p>
                                    Если выключено, твой профиль будет скрыт из фотоподборки, а Находки будут отключены. Люди, которые уже получили от тебя лайк, по-прежнему смогут видеть твой профиль и образовывать с тобой пары.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="title ">
                    <h3>
                        Управляй кто может тебе писать
                    </h3>
                    
                </div>
                <div className="listWrapper">
                    <ul>
                        <li>
                            <div className="itemWrapper">
                                <div className="description">
                                    <span>
                                        Чат с подтвержденными фото
                                    </span>
                                    <br />
                                    <span className="smallText">
                                        Требует подтверждение личности
                                    </span>
                                </div>
                                <div className="value">
                                    <ToggleBtn/>
                                </div>
                            </div>
                            <div className="optionDescription" style={{marginTop: '10px'}}>
                                <p>
                                    Если выключено, твой профиль будет скрыт из фотоподборки, а Находки будут отключены. Люди, которые уже получили от тебя лайк, по-прежнему смогут видеть твой профиль и образовывать с тобой пары.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="title ">
                    <h3>
                        Просмотрено
                    </h3>
                    
                </div>
                <div className="listWrapper">
                    <ul>
                        <li>
                            <div className="itemWrapper">
                                <div className="description">
                                    <span>
                                        Отправлять уведомления “Просмотрено”
                                    </span>
                                </div>
                                <div className="value">
                                    <ToggleBtn/>
                                </div>
                            </div>
                            <div className="optionDescription">
                                <p>
                                    Если ты отключишь данную функцию, твои пары не смогут активировать уведомления «Просмотрено» в твоих переписках.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="title ">
                    <h3>
                        Общие друзья
                    </h3>
                    
                </div>
                <div className="listWrapper">
                    <ul>
                        <li>
                            <div className="itemWrapper">
                                <div className="description">
                                    <span>
                                        Заблокировать контакты
                                    </span>
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
                            </div>
                            <div className="optionDescription">
                                <p>
                                    Выберите из списка контактов людей, с которыми вы не хотите пересекаться в Tinder.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="title ">
                    <h3>
                        События с вопросами
                    </h3>
                    
                </div>
                <div className="listWrapper">
                    <ul>
                        <li>
                            <div className="itemWrapper">
                                <div className="description">
                                    <span>
                                        Управлять событиями с вопросами
                                    </span>
                                </div>
                                <div className="value">
                                    <div className="text">
                                            <span>
                                                Настройки
                                            </span>
                                        </div>
                                        <SVGIcon name="arrowRight" size={20}  />
                                        <div className="underline"></div>
                                </div>
                            </div>
                            
                        </li>
                    </ul>
                </div>
                <div className="title ">
                    <h3>
                        Топ - Профили
                    </h3>
                    
                </div>
                <div className="listWrapper">
                    <ul>
                        <li>
                            <div className="itemWrapper">
                                <div className="description">
                                    <span>
                                        Управление топ-профилями
                                    </span>
                                </div>
                                <div className="value">
                                    <div className="text">
                                            <span>
                                                Настройки
                                            </span>
                                        </div>
                                        <SVGIcon name="arrowRight" size={20}  />
                                        <div className="underline"></div>
                                </div>
                            </div>
                            
                        </li>
                    </ul>
                </div>
                <div className="title ">
                    <h3>
                        Личные сообщения
                    </h3>
                    
                </div>
                <div className="listWrapper">
                    <ul>
                        <li>
                            <div className="itemWrapper">
                                <div className="description">
                                    <span>
                                        Управлять личными сообщениями
                                    </span>
                                </div>
                                <div className="value">
                                    <div className="text">
                                            <span>
                                                Настройки
                                            </span>
                                        </div>
                                        <SVGIcon name="arrowRight" size={20}  />
                                        <div className="underline"></div>
                                </div>
                            </div>
                            
                        </li>
                    </ul>
                </div>
                <div className="title ">
                    <h3>
                        Взрыв свайпов
                    </h3>
                    
                </div>
                <div className="listWrapper">
                    <ul>
                        <li>
                            <div className="itemWrapper">
                                <div className="description">
                                    <span>
                                        Управлять взрывом свайпов
                                    </span>
                                </div>
                                <div className="value">
                                    <div className="text">
                                            <span>
                                                Настройки
                                            </span>
                                        </div>
                                        <SVGIcon name="arrowRight" size={20}  />
                                        <div className="underline"></div>
                                </div>
                            </div>
                            
                        </li>
                    </ul>
                </div>
                <div className="title ">
                    <h3>
                        Использование данных
                    </h3>
                    
                </div>
                <div className="listWrapper">
                    <ul>
                        <li>
                            <div className="itemWrapper">
                                <div className="description">
                                    <span>
                                        Использование данных
                                    </span>
                                </div>
                                <div className="value">
                                    {/* <div className="text">
                                            <span>
                                                Настройки
                                            </span>
                                        </div> */}
                                        <SVGIcon name="arrowRight" size={20}  />
                                        <div className="underline"></div>
                                </div>
                            </div>
                            
                        </li>
                    </ul>
                </div>
                <div className="title ">
                    <h3>
                        Статус активности
                    </h3>
                    
                </div>
                <div className="listWrapper">
                    <ul>
                        <li>
                            <div className="itemWrapper">
                                <div className="description">
                                    <span>
                                        Статус активности
                                    </span>
                                </div>
                                <div className="value">
                                    {/* <div className="text">
                                            <span>
                                                Настройки
                                            </span>
                                        </div> */}
                                        <SVGIcon name="arrowRight" size={20}  />
                                        <div className="underline"></div>
                                </div>
                            </div>
                            
                        </li>
                    </ul>
                </div>

                <div className="title ">
                    <h3>
                        Статус активности
                    </h3>
                    
                </div>
                <div className="listWrapper">
                    <ul>
                        <li>
                            <div className="itemWrapper">
                                <div className="description">
                                    <span>
                                        Статус активности
                                    </span>
                                </div>
                                <div className="value">
                                    {/* <div className="text">
                                            <span>
                                                Настройки
                                            </span>
                                        </div> */}
                                        <SVGIcon name="arrowRight" size={20}  />
                                        <div className="underline"></div>
                                </div>
                            </div>
                            
                        </li>
                    </ul>
                </div>

                <div className="title ">
                    <h3>
                        Профиль в интернете
                    </h3>
                    
                </div>
                <div className="listWrapper">
                    <ul>
                        <li>
                            <div className="itemWrapper">
                                <div className="description">
                                    <span>
                                        Имя пользователя
                                    </span>
                                </div>
                                <div className="value">
                                    <div className="text">
                                            <span>
                                                Придумайте имя
                                            </span>
                                        </div>
                                        <SVGIcon name="arrowRight" size={20}  />
                                        <div className="underline"></div>
                                </div>
                            </div>
                            <div className="optionDescription">
                                <p>
                                    Создайте имя пользователя и поделитесь им с другими. Пусть люди со всего мира заценят вас в
                                    Fondora.
                                </p>
                            </div>
                            
                        </li>
                    </ul>
                </div>
                <div className="title ">
                    <h3>
                        Уведомления
                    </h3>
                    
                </div>
                <div className="listWrapper">
                    <ul>
                        <li>
                            <div className="itemWrapper">
                                <div className="description">
                                    <span>
                                        Адрес электронной почты
                                    </span>
                                </div>
                                <div className="value">
                                        <SVGIcon name="arrowRight" size={20}  />
                                        <div className="underline"></div>
                                </div>
                            </div>
                            
                            
                        </li>
                        <li>
                            <div className="itemWrapper">
                                <div className="description">
                                    <span>
                                        Push - уведомления
                                    </span>
                                </div>
                                <div className="value">
                                   
                                        <SVGIcon name="arrowRight" size={20}  />
                                        <div className="underline"></div>
                                </div>
                            </div>

                            
                        </li>
                        <li>
                            <div className="itemWrapper">
                                <div className="description">
                                    <span>
                                        Team Fondora
                                    </span>
                                </div>
                                <div className="value">
                                    {/* <div className="text">
                                            <span>
                                                Придумайте имя
                                            </span>
                                        </div> */}
                                        <SVGIcon name="arrowRight" size={20}  />
                                        <div className="underline"></div>
                                </div>
                            </div>
                            <div className="optionDescription">
                                <p>
                                    Выберите, какие уведомления будут видны внутри приложения.
                                </p>
                            </div>
                            
                        </li>
                    </ul>
                </div>
                <div className="title ">
                    <h3>
                        Поделиться Fondora
                    </h3>
                    
                </div>
                <div className="socialWrapper">
                    <div className="item">
                        <SVGIcon name="vk" size={40}  />
                    </div>
                    <div className="item">
                        <SVGIcon name="tg" size={40}  />

                        
                    </div>
                    <div className="item">
                        <SVGIcon name="yandex" size={40}  />

                        
                    </div>
                    <div className="item">
                        <SVGIcon name="mail" size={40}  />

                        
                    </div>
                    
                </div>
                <div className="repairPurchase">
                    <p>
                        Восстановить покупки
                    </p>
                </div>
                <div className="title ">
                    <h3>
                        Контакты
                    </h3>
                    
                </div>
                <div className="listWrapper">
                    <ul>
                        <li>
                            <div className="itemWrapper">
                                <div className="description">
                                    <span>
                                        Помощь и поддержка
                                    </span>
                                </div>
                                <div className="value">
                                        <SVGIcon name="arrowRight" size={20}  />
                                        <div className="underline"></div>
                                </div>
                            </div>
                           
                        </li>
                    </ul>
                </div>
                <div className="title ">
                    <h3>
                        Сообщество
                    </h3>
                    
                </div>
                <div className="listWrapper">
                    <ul>
                        <li>
                            <div className="itemWrapper">
                                <div className="description">
                                    <span>
                                        Правила сообщества
                                    </span>
                                </div>
                                <div className="value">
                                        <SVGIcon name="arrowRight" size={20}  />
                                        <div className="underline"></div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="itemWrapper">
                                <div className="description">
                                    <span>
                                        Советы по безопасности
                                    </span>
                                </div>
                                <div className="value">
                                        <SVGIcon name="arrowRight" size={20}  />
                                        <div className="underline"></div>
                                </div>
                            </div>
                           
                        </li>
                        <li>
                            <div className="itemWrapper">
                                <div className="description">
                                    <span>
                                        Центр безопасности
                                    </span>
                                </div>
                                <div className="value">
                                        <SVGIcon name="arrowRight" size={20}  />
                                        <div className="underline"></div>
                                </div>
                            </div>
                           
                        </li>
                    </ul>
                </div>
                <div className="title ">
                    <h3>
                        Конфиденциальность
                    </h3>
                    
                </div>
                <div className="listWrapper">
                    <ul>
                        <li>
                            <div className="itemWrapper">
                                <div className="description">
                                    <span>
                                        Политика в отношении файлов cookie
                                    </span>
                                </div>
                                <div className="value">
                                        <SVGIcon name="arrowRight" size={20}  />
                                        <div className="underline"></div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="itemWrapper">
                                <div className="description">
                                    <span>
                                        Политика конфиденциальности
                                    </span>
                                </div>
                                <div className="value">
                                        <SVGIcon name="arrowRight" size={20}  />
                                        <div className="underline"></div>
                                </div>
                            </div>
                           
                        </li>
                        <li>
                            <div className="itemWrapper">
                                <div className="description">
                                    <span>
                                        Настройки конфиденциальности
                                    </span>
                                </div>
                                <div className="value">
                                        <SVGIcon name="arrowRight" size={20}  />
                                        <div className="underline"></div>
                                </div>
                            </div>
                           
                        </li>
                    </ul>
                </div>
                <div className="title ">
                    <h3>
                        Юридическая информация
                    </h3>
                </div>
                <div className="listWrapper">
                    <ul>
                        <li>
                            <div className="itemWrapper">
                                <div className="description">
                                    <span>
                                        Лицензии
                                    </span>
                                </div>
                                <div className="value">
                                        <SVGIcon name="arrowRight" size={20}  />
                                        <div className="underline"></div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="itemWrapper">
                                <div className="description">
                                    <span>
                                        Условия обслуживания
                                    </span>
                                </div>
                                <div className="value">
                                        <SVGIcon name="arrowRight" size={20}  />
                                        <div className="underline"></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="exit">
                    <SVGIcon name="exit" size={20}/>
                    <span>
                        Выйти
                    </span>

                </div>
                <div className="fondora">
                    <div className="logo">
                        <SVGIcon name="mainLogo" size={110} height={26}/>
                    </div>
                    <div className="version">
                        <span>
                            Версия 14.20.56
                        </span>
                    </div>
                </div>
                <div className="deleteAccount" style={{marginBottom: '50px'}}>
                    <SVGIcon name="deleteAccount" size={20} stroke={'#969696'}/>
                    <span>
                        Удалить аккаунт
                    </span>

                </div>


            </div>






        </div>
    )
}

export default Settings