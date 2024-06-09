import React, { useEffect, useState } from "react";
import { pairData } from "../../Data/PairData";
import { IPairs } from "../../model/PairsModel";
import SVGIcon from "../../assets/icons/svgComponent";
import './Pairs.scss'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNewChatId } from "../../store/rootSlice";




const Pairs = () => {

    // const [pairArray, setPairArray] = useState<IPairs[]>([...pairData]);


    const dispatch = useDispatch();


    // const sendMessage = (person: IPairs) => {
        
        

    
    //     const newPairData = pairArray.filter(element => element.id !== person.id);
    //     setPairArray(newPairData);
    //     // // console.log(pairArray);
        


    //     // console.log(newPairData);
        

    // }


    const linkToNewChat = (newChatId: number) => {

        dispatch(setNewChatId(newChatId.toString()));

    }




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
                                <Link to={`/pairs/newChat/${item.id}`}>

                                    <div className="pairElement" key={item.id} onClick={() =>linkToNewChat(item.id)}>
                                        <img src={item.image} alt="pair" />
                                        <div className="pairName">
                                            <span>{item.userName}</span>
                                            {
                                                item.verification ? <SVGIcon name="verificationProfile" fill="green" size={15}/> : null
                                            }

                                        </div>
                                    </div>
                                
                                
                                </Link>
                            
                                
                            )
                        })

                    }

                </div>

                
                    
                
                

            </div>

        </>
    )
}




export default Pairs