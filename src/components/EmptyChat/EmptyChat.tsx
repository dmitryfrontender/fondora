import React from "react";
import SVGIcon from '../../assets/icons/svgComponent';
import './EmptyChat.scss';





const EmptyChat = () => {




    return (

        <>
        <div className="EmptyChat">
            <SVGIcon name="emptyChat" size={100} />
            <h4>Скажи “Привет!”</h4>
            <span>Коснись новой пары, чтобы отправить сообщение.</span>
        </div>
        
        </>
    )
}



export default EmptyChat