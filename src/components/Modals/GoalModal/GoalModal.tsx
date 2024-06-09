import React from "react";
import DefaultBtn from "../../DefaultBtn/DefaultBtn";
import { setGoalPageModal } from "../../../store/GoalPageSlice";
import prevImage from '../../../assets/images/goalModalPrev.png'
import SVGIcon from "../../../assets/icons/svgComponent";


import './GoalModal.scss'
import { useDispatch } from "react-redux";






const GoalModal = () => {

    const dispatch = useDispatch()




    return(

        <>
            <div className="GoalModal Modal">
                <div className="prevBlock">
                    <img src={prevImage} alt="img" />
                    <h1>
                        ЦельКа
                    </h1>
                    <SVGIcon name="goalIcon" size={150} fill={'#F22271'}/>
                </div>

                <div className="modalWrapper">
                    <div className="tittle">
                        <h2>
                            Представляем ЦельКа
                        </h2>
                    </div>
                    <span className="description">
                        Новый увлекательный способ знакомиться и обзаться с интересными людьми.

                    </span>
                    <div className="btn" onClick={() => {dispatch(setGoalPageModal(false))}}>
                        <DefaultBtn background={'red'} arrow={false} text={'Понятно'}/>
                    </div>

                </div>


            </div>

        
        
        </>
    )
}



export default GoalModal