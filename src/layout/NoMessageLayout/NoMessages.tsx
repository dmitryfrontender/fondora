import React from "react";
import noMessages from '../../assets/images/NoMessages.png'
import SVGIcon from "../../assets/icons/svgComponent";
import DefaultBtn from "../../components/DefaultBtn/DefaultBtn";
import './NoMessages.scss'



const NoMessages = () => {

    return (
        <>
            <div className=" page noMessagesWrapper">
                <div className="rightPageWrapper">
                    <div className="image">
                        <img src={noMessages} alt="noMessages" />
                    </div>
                    <div className="title">
                        <h3>
                            Найти пары
                        </h3>
                    </div>
                    <div className="description">
                        <p>
                            Когда вы найдёте себе несколько пар, они отобразятся 
                            здесь и вы сможете отправить им сообщения
                        </p>
                    </div>
                    <DefaultBtn background={'red'} arrow={true} text={'Найти пару'}/>
                </div>
            </div>
        </>
    )
}



export default NoMessages