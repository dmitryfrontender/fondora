import React from "react";
import './MessageSmile.scss'


interface MessageSmileProps {
    onSelect: (reaction: string) => void;
}



const MessageSmile = ({onSelect}: MessageSmileProps) => {

    const smiles = ['😍', '👍🏻', '❤', '🫶', '😭'];








    return(
        <>
            <div className="messageSmiles" >
                {smiles.map((smile, index) => (
                    <span key={index} onClick={() => onSelect(smile)}>{smile}</span>
                ))}
            </div>


            {/* <div className="MessageSmile">
                <div className="wrapper">
                    <div className="smile">
                        <span>
                            😍
                        </span>
                    </div>
                    <div className="smile">
                        <span>
                            😄
                        </span>
                    </div>
                    <div className="smile">
                        <span>
                            👍🏻
                            
                        </span>
                    </div>
                    <div className="smile">
                        <span>
                            ❤
                            
                        </span>
                    </div>
                    <div className="smile">
                        <span>
                            👎🏻
                            
                        </span>
                    </div>
                    <div className="smile">
                        <span>
                            😭
                            
                        </span>
                    </div>
                    <div className="btnDown">
                        <SVGIcon name="arrowDown" size={20}/>
                    </div>
                </div>

            </div> */}
        
        </>
    )
}



export default MessageSmile