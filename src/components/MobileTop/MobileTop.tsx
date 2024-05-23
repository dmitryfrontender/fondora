import React from "react";
import SVGIcon from "../../assets/icons/svgComponent";
import { Link, useLocation } from "react-router-dom";
import './MobileTop.scss'





const MobileTop = () => {

    const location = useLocation()




    const settingPageWrapper = () => {
        const pageWrapper = document.querySelector('.pageWrapper');
        (pageWrapper as HTMLElement).style.top = '0';
    }
    



    return(
        <>  
            {
                location.pathname === '/settings' ? 
                null
                :
                <div className="MobileTop">
                    <div className="topWrapper">
                        <div className="logo">
                            <SVGIcon name="mainLogo" />
                        </div>
                        <div className="topBtn">
                            <Link  to='/notifications'>
                                <SVGIcon name="notification" stroke="#BDBDBD"/>
                            </Link>
                            <Link to='/settings' onClick={() => settingPageWrapper()}>
                                <SVGIcon name="settings" stroke="#BDBDBD"/>
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}



export default MobileTop