import React from "react";
import PremiumSearch from "../../components/PremiumSearch/PremiumSearch";
import './MobileSettings.scss'
import ToggleBtn from "../../components/ToggleBtn/ToggleBtn";
import DoubleRangeSlider from "../../components/DoubleRangeSlider/DoubleRange";
import SingleRangeSlider from "../../components/SingleRangeSlider/SingleRangeSlider";
import SVGIcon from "../../assets/icons/svgComponent";
import { useNavigate } from "react-router-dom";


const MobileSettings = () => {




    const navigate = useNavigate();


    return (

        <>
            <div className="MobileSettings">
                <div className="wrapper">
                    <div className="topMobileSettings">
                        <SVGIcon name="arrowLeft" size={20} onClick={() => navigate(-1)}/>
                        <h3>
                            Настройки Находок
                        </h3>
                        <span>
                            Готово
                        </span>
                    </div>
                    
                    <div className='listWrapper'>
							<ul>
								<li className='listValue' style={{ alignItems: 'start' }}>
									<div className='description'>
										<span>Расстояние</span>
									</div>
									<SingleRangeSlider min={0} max={100} defaultValue={30} />
								</li>
								<li>
									<div className='itemWrapper'>
										<div className='description'>
											<span>Показывать людей только в этом диапазоне</span>
										</div>
										<div className='value'>
											<ToggleBtn />
										</div>
									</div>
								</li>
								<li>
									<div className='itemWrapper'>
										<div className='description'>
											<span>Показывать меня</span>
										</div>
										<div className='value'>
											<div className='text'>
												<span>Женщины</span>
											</div>
											<SVGIcon name='arrowRight'  width={20} height={20} />
											<div className='underline'></div>
										</div>
									</div>
								</li>
								<li className='listValue' style={{ alignItems: 'start' }}>
									<div className='description'>
										<span>Возраст</span>
									</div>
									<DoubleRangeSlider />
								</li>
								<li>
									<div className='itemWrapper'>
										<div className='description'>
											<span>Показывать людей только в этом диапазоне</span>
										</div>
										<div className='value'>
											<ToggleBtn />
										</div>
									</div>
								</li>
							</ul>
						</div>
                <PremiumSearch/>

                </div>
                
                
            </div>
        
        
        </>
    )
}



export default MobileSettings