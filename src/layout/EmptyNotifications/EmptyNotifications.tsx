import React from "react";
import "./EmptyNotifications.scss"
import emptyNotifications from "../../assets/images/EmptyNotification.png"





const EmptyNotifications = () => {

    return (
        <>
            <div className="page EmptyNotifications">
                <div className="rightPageWrapper">
                    <div className="image">
                        <img src={emptyNotifications} alt="emptyNotification" />
                    </div>
                    <div className="title">
                        <h3>
                            Нет уведомлений
                        </h3>
                    </div>
                    <div className="description">
                        <p>
                            Здесь будет появляться информация о парах и сообщениях, советы по профилю и многое другое!
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}



export default EmptyNotifications