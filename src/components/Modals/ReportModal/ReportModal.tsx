import React, { useEffect, useRef } from "react";
import './ReportModal.scss';
import SVGIcon from '../../../assets/icons/svgComponent';
import { setReportModal } from "../../../store/ProtectSlice";
import { useDispatch } from 'react-redux';
import DefaultBtn from "../../DefaultBtn/DefaultBtn";
import { useSelector } from "react-redux";

// import { setReportModal } from '../../../store/ReportSlice';


const ReportModal = ( ) => {

    const dispatch = useDispatch();
    const ref = useRef<HTMLInputElement>(null);

    const userName = useSelector((state: any) => state.ProtectState.userName);
    const userAvatar = useSelector((state: any) => state.ProtectState.userAvatar);

    const handleClickOutside = (e: any) => {
        if (e.target.className === ref.current?.className) {
			dispatch(setReportModal(false));
		}
    };


    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
    });



    return (
        <>
            <div className="ReportModal Modal" ref={ref}>
                <div className="modalWrapper">
				<div className="modalCloseBtn">
					<SVGIcon name='cancelBtn' size={20} onClick={() => dispatch(setReportModal(false))} />
				</div>
                <div className='topBlock'>
					<div className='backBtn' onClick={() => dispatch(setReportModal(false))}>
						<button>
							<SVGIcon name='arrowLeft' size={20} />
						</button>
					</div>
					<div className='flag'>
						<SVGIcon name='flagBtn' size={25} />
					</div>
					<div className='cancelBtn' onClick={() => dispatch(setReportModal(false))}>
						<button>
							<span>Отмена</span>
						</button>
					</div>
				</div>
				<div className='progressBar'>
					<div className='item'>
						<span>Причина</span>
						<div className='border border-left border-active'></div>
					</div>
					<div className='item'>
						<span>Подробности</span>
						<div className='border'></div>
					</div>
					<div className='item'>
						<span>Отправить</span>
						<div className='border border-right'></div>
					</div>
				</div>
				<div className='tittle'>
					<h2>О чем ты хочешь сообщить нам?</h2>
				</div>
				<div className='formComplain'>
					<div className='item'>
						<span>Информация о пользователе</span>
					</div>
					<div className='item'>
						<span>Фото профиля</span>
					</div>
					<div className='item'>
						<span>Что-то произошло вне Fondora или при личной встрече</span>
					</div>
				</div>
				<div className='hrElement'></div>
				<div className='moreInfo'>
					<div className='image'>
						<div className='pin'></div>
						<div className='pin'></div>
						<div className='pin'></div>
					</div>
					<span>
						Если ты хочешь пожаловаться на что-то еще в профиле этого человека, ты можешь вернуться в его профиль и найти причину жалобы. Нажми на значок с тремя точками и выбери
						«Пожаловаться».
					</span>
				</div>
				<div className='note'>
					<img src={userAvatar} alt='avatar' />
					<span>{userName} не узнает о твоей балобе</span>
				</div>
				<DefaultBtn text='Далее' background='red' arrow={true} />

                </div>
                
            </div>
        
        
        </>
    )
}



export default ReportModal