import React from "react";
import { pairData } from "../../Data/PairData";
import { IPairs } from "../../model/PairsModel";
import SVGIcon from "../../assets/icons/svgComponent";
import './Pairs.scss'




const Pairs = () => {



    return(
        <>
            <div className="Pairs">

                <div className="pairsWrapper">
                        <div className="pairElement likes">
                            <div className="blurWrapper">
                                <img src={pairData[0].image} alt="pair" />
                                <div className="countSlides">
                                    <span>
                                        {pairData.length}
                                    </span>
                                </div>
                                
                            </div>
                            <div className="heartIcon">
                                    <SVGIcon name="heartIcon" stroke="white"  size={16}/>
                                </div>
                            <div className="pairName">
                                <span>Лайков</span>
                            </div>
                            
                        </div>
                    {
                        pairData.map((item:IPairs) => {
                            return(
                                <div className="pairElement" key={item.id}>
                                    <img src={item.image} alt="pair" />
                                    <div className="pairName">
                                        <span>{item.userName}</span>
                                        {
                                            item.verification ? <SVGIcon name="verificationProfile" fill="green" size={15}/> : null
                                        }

                                    </div>
                                </div>
                                
                            )
                        })

                    }

                </div>

                
                    
                
                

            </div>

        </>
    )
}




export default Pairs