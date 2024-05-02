import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react"
import './DoubleRange.scss'

interface IProps {
   
    topItem?: boolean
}


const DoubleRange = ({topItem}: IProps) => {
    
    const [minValue, set_minValue] = useState(20);
    const [maxValue, set_maxValue] = useState(35);


    const handleInput = (e: any) => {
        set_minValue(parseInt(e.minValue));
        set_maxValue(parseInt(e.maxValue));
    };



    return(
        <>
            <div className="DoubleRange">
                <div className="wrapper">
                    <div className="container">
                        {
                            topItem && 
                            <div className="topItem">
                                <div className="description">
                                    <span>
                                        Возрастной диапазон
                                    </span>

                                </div>
                                <div className="value">
                                    <span>
                                        {minValue}-{maxValue}
                                    </span>
                                </div>

                            </div>
                        }
                        
                        <div className="sliderTrack"></div>
                        <MultiRangeSlider
                        
                        label='false'
                        ruler='false'
                        canMinMaxValueSame={true}
                        barLeftColor='rgb(97, 75, 81)'
                        // barInnerColor='linear-gradient(135deg, rgb(132, 9, 56) 0%, rgb(242, 34, 113) 100%)'
                        barInnerColor='none'
                        barRightColor='rgb(97, 75, 81)'
                        thumbLeftColor='rgb(152, 14, 67)'
                        thumbRightColor='rgb(231, 32, 108)'
                        style={{}}
                            min={18}
                            max={60}
                            step={5}
                            
                            minValue={minValue}
                            maxValue={maxValue}
                            onInput={(e) => {
                                handleInput(e);
                            }}
                        
                        />
                        {/* <input type="range" min={18} max={valueSliderTwo}  defaultValue={valueSliderOne}    id="slider1" onInput={(e) => sliderOne(+e.target.value)}/> */}
                        {/* <input type="range" min={valueSliderTwo} max={60} defaultValue={valueSliderTwo}  id="slider2" onInput={(e) => sliderTwo(+e.target.value)}/> */}

                        {
                            !topItem &&
                            <div className="values">
                                <span id="range1">
                                    {minValue}
                                </span>
                                <span> - </span>
                                <span id="range2">
                                    {maxValue}
                                </span>
                            </div>
                        }

                        

                    </div>
                </div>
            </div>


        </>
    )
}



export default DoubleRange