import React, { useState } from "react";
import './EnterMessage.scss'
import SVGIcon from "../../assets/icons/svgComponent";
import TextareaAutosize from "react-textarea-autosize";






const EnterMessage = () => {


    const [areaValue, setAreaValue] = useState('');
    const [sendBtn, setSendBtn] = useState(false);




    const resizeArea = (e: any) => {

        if (e.target.value.length === 0) {
            setAreaValue('');
            setSendBtn(false);

        } else if (e.target.value.length <= 1) {

                setAreaValue(e.target.value.trim());
                setSendBtn(false);
                if (e.target.value !== ' ') {
                    setSendBtn(true);
                }
                
        } else if (e.target.value.length > 1) {
            setAreaValue(e.target.value);
            setSendBtn(true);
            
        } 
    }




    return(
        <>
            <div className="inputBlock">
                <div className="inputWrapper">
                    <div className="input">
                        <TextareaAutosize
                            placeholder="Напишите сообщение..."
                            value={areaValue}
                            minRows={2}
                            maxRows={4}
                            onChange={resizeArea}
                        />
                        <div className={`sendBtn ${sendBtn ? 'activeSendBtn' : ''}`}>
                            <button>
                                <SVGIcon name="sendTgBtn" size={20} />
                            </button>
                        </div>
                    </div>
                    
                </div>
                <div className="buttonWrapper">
                    <div className="leftPanel">
                        <button>
                            <SVGIcon size={20} name="gifBtn" />
                        </button>
                        <button>
                            <SVGIcon size={20} name="smileBtn" />
                        </button>
                        <button>
                            <SVGIcon size={20} name="fileBtn" />
                        </button>
                    </div>
                    <div className="rightPanel">
                        <button>
                            <SVGIcon size={20} name="voiceMessageBtn" />
                        </button>   
                    </div>
                </div>
            </div>
        </>
    )
}



export default EnterMessage
