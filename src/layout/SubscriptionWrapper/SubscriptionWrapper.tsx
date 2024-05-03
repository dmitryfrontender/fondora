import React, { useState } from "react";
import './SubscriptionWrapper.scss'
import './Subscriptions.scss'
import Gold from "./Subscriptions/Gold/Gold";
import Plus from "./Subscriptions/Plus/Plus";
import Vip from "./Subscriptions/Vip/Vip";
import SVGIcon from "../../assets/icons/svgComponent";
import { useNavigate } from "react-router-dom";

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

interface IShow{
    page: number
}



const SubscriptionWrapper = ({page}: IShow) => {


    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = React.useState(page || 0)
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: page || 0,
       
        slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
        },
        created() {
        setLoaded(true);
        },
        
        // resize(600)
    },
    [
        (slider) => {
            slider.size=575
        }
      ]
)



    return(
        <>
            <div className="page Subscription">
                <div className="bannerItem">
                    <div className="subscriptionWrapper">
                        <div className="topItem">
                            <div className="title">
                                <h3>
                                    Моя Подписка
                                </h3>
                            </div>
                            <div className="cancelBtn" onClick={() => navigate(-1)}>
                                <SVGIcon name="cancelBtn" size={20}/>

                            </div>
                        </div>
                    </div>
                    <div className="navigation-wrapper">
                        <div ref={sliderRef} className="keen-slider" >
                            <div className="keen-slider__slide number-slide1">
                                <div className="banner plus">
                                    <div className="bannerImg">
                                        <SVGIcon name="logoPlus" size={20}/>
                                        <div className="marker">
                                            <span>
                                                PLUS
                                            </span>
                                        </div>
                                    </div>
                                    <div className="buyBtn">
                                        <span>
                                            Купить Подписку
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="keen-slider__slide number-slide2">
                                <div className="banner gold">
                                    <div className="bannerImg">
                                        <SVGIcon name="logoGold" size={20}/>
                                        <div className="marker">
                                            <span>
                                                GOLD
                                            </span>
                                        </div>
                                    </div>
                                    <div className="buyBtn">
                                        <span>
                                            Купить Подписку
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="keen-slider__slide number-slide3">
                                <div className="banner vip">
                                    <div className="bannerImg">
                                        <SVGIcon name="logoVip" size={20}/>
                                        <div className="marker">
                                            <span>
                                                VIP
                                            </span>
                                        </div>
                                    </div>
                                    <div className="buyBtn">
                                        <span>
                                            Купить Подписку
                                        </span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        {loaded && instanceRef.current && (
                            <div className="dots">
                            {[
                                ...Array(instanceRef.current.track.details.slides.length).keys(),
                            ].map((idx) => {
                                return (
                                <button
                                    key={idx}
                                    onClick={() => {
                                    instanceRef.current?.moveToIdx(idx)
                                    }}
                                    className={"dot" + (currentSlide === idx ? " active" : "")}
                                ></button>
                                )
                            })}
                            </div>
                        )}

                    </div>

                </div>
                {currentSlide === 0 && <Plus/>} 
                {currentSlide === 1 && <Gold/>}
                {currentSlide === 2 && <Vip/>}
            </div>
        </>
    )
}


export default SubscriptionWrapper