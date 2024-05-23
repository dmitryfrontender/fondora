import React, { useState } from "react";
import SVGIcon from "../../assets/icons/svgComponent";
import './MobileLikesTop.scss'
import { myLikes } from "../../Data/MyLikes";
import { topProfiles } from "../../Data/TopProfiles";
import Likes from "../../pages/LikesTopProfile/Likes/Likes";
import TopProfile from "../../pages/LikesTopProfile/Top-profiles/TopProfile";


const MobileLikesTop = () => {

    const [togglePage, setTogglePage] = useState(false)






    return(

        <>
            <div className="ToggleLikeTop">
                <div className={`item ${togglePage ? 'active': ''}`} onClick={() => {setTogglePage(true)}}>
                    <SVGIcon name="heartIcon" stroke="#BDBDBD" size={20} />
                    <span>
                        &nbsp;
                        {
                            myLikes.length
                        }
                        &nbsp;
                        Лайков
                    </span>

                </div>
                <div className={`item ${togglePage ? '': 'active'}`} onClick={() => {setTogglePage(false)}}>
                    <SVGIcon name="topProfile" stroke="#BDBDBD" size={20} />
                    &nbsp;
                    <span>
                        Топ-профили: 
                        &nbsp;
                        {
                            topProfiles.length
                        }
                    </span>

                </div>
            </div>
            {
                togglePage ? 
                    <Likes /> 
                    : 
                    <TopProfile />
            }
        
        
        
        </>
    )
}




export default MobileLikesTop