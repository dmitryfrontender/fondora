import React from "react";
import SVGIcon from "../../../assets/icons/svgComponent";
import '../LikesTopProfilePage.scss'
import { myLikes }  from "../../../Data/MyLikes";
import { ILikes } from "../../../model/LikesModel";
import { useSelector, useDispatch } from "react-redux";
import { likesModalState } from "../../../store/LikesStateSlice";
import { bodyOverflow } from "../../../utils/bodyOverflow";





const Likes = () => {


    const topProfileState = useSelector((state: any) => state.mainState.topProfile);
    const dispatch = useDispatch()







    // useEffect(() => {


    //     const handleResize = (event: any) => {
    //         setWidth(event.target.innerWidth);
    //       };
    //       window.addEventListener('resize', handleResize);
    //       return () => {
    //         window.removeEventListener('resize', handleResize);
    //       };

        
    // },[])

  
    
    
    
    return (
        <>
            <div className="page LikesTopProfile">
                <div className="PagesWrapper">
                   
                    <div className="topButtons">
                        <div className="filter" onClick={() => {
                            dispatch(likesModalState('open-likesModal'));
                            bodyOverflow(true);
                        }}>

                            <SVGIcon name="filtersBtn" size={20}/>
                        </div>
                        <div className="buttonItem">
                            <span>
                                Поблизости
                            </span>
                        </div>
                        <div className="buttonItem">
                            <span>
                                Есть информация о себе
                            </span>
                        </div>
                        <div className="buttonItem">
                            <span>
                                Фото
                            </span>
                        </div>
                    </div>
                    <div className="bannerGold">
                        <div className="bannerDescription">
                            <p>
                                Перейдите на Fandora Gold, чтобы узнать, 
                                кто поставил Вам лайк.
                            </p>
                        </div>
                        <div className="bannerWrapper">
                            <div className="item">
                                <div className="logo">
                                    <SVGIcon name="goldLogoHeart" size={28}/>

                                </div>
                                <div className="marker">
                                    <span>
                                        GOLD
                                    </span>

                                </div>

                            </div>
                            <div className="item">
                                <div className="goBtn">
                                    <span>
                                        Перейти
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pageGallery">
                        {
                            myLikes.map((item: ILikes) => {
                                
                                return(
                                    <div className="item" key={item.id}>
                                        <div className="userPhoto">
                                            <img src={item.image} alt="user" style={topProfileState ? {'filter': 'blur(0px)'} : {'filter': 'blur(34px)'}}/>
                                        </div>
                                        <div className="recentlyActive">
                                            <div className="markActivity"></div>
                                            <div className="description">
                                                    <span>
                                                        Недавно активные
                                                    </span>
                                                </div>
                                        </div> 
                                    </div>
                                )
                            })
                        }
                    </div> 
                </div>
                
            </div>
            
        </>
        
    )
}



export default Likes