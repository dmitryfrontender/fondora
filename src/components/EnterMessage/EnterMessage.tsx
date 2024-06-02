import React, { useEffect, useState } from "react";
import './EnterMessage.scss'
import SVGIcon from "../../assets/icons/svgComponent";
import TextareaAutosize from "react-textarea-autosize";
import { messagesData } from '../../Data/MessagesData'
import { IMessages } from "../../model/MessagesModel";
import { setTypingState } from "../../store/rootSlice";
import { useDispatch } from "react-redux";


interface IProps {
    chatId: string,
    forceRerender?: () => void | undefined
}





const EnterMessage = ({chatId, forceRerender}: IProps) => {



    // console.log(chatId);
    


    const [areaValue, setAreaValue] = useState('');
    const [sendBtn, setSendBtn] = useState(false);

    const dispatch = useDispatch();


    const refreshData = () => {
        if (forceRerender) forceRerender()
    }




    const resizeArea = (e: any) => {
        

        

        if (e.target.value.length === 0) {
            setAreaValue('');
            setSendBtn(false);

        } else if (e.target.value.length <= 1) {

                setAreaValue(e.target.value.trim());

                setSendBtn(false);
                if (e.target.value !== '') {
                    setSendBtn(true);
                }
                
        } else if (e.target.value.length > 1) {
            setAreaValue(e.target.value);
            setSendBtn(true);
            
        } 
    }


    const handleKeyPress = (event: any) => {        

        // if (event.code === "Enter" && sendBtn && areaValue.length > 0){
        if (event.code === "Enter" ){

            setAreaValue('');

            setSendBtn(false);


            const newMessage = messagesData.filter((elem: IMessages) => {
                
                return  elem.id === +chatId
                
            })

            let messageId = 0;

            newMessage.forEach((elem: any) => {

                elem.messages.forEach((id: any) => {
                    
                    messageId = id.id
                })

                elem.messages.push({
                    
                    id: messageId + 1,
                    text: areaValue,
                    time: '21:21',
                    daySend: ['Tuesday'],
                    unRead: false,
                    owner: true
                           
                })
                
                // console.log(elem);
                

            })
            messageId = 0

            refreshData();

            setTimeout(() => {
                dispatch(setTypingState(true))
            }, 1000)

            setTimeout(() => {
                newMessage.forEach((elem: any) => {

                    elem.messages.forEach((id: any) => {
                        
                        messageId = id.id
                    })
                    
    
                    elem.messages.push({
                        
                        id: messageId + 1,
                        text: `companion answer ${+messageId - 1}`,
                        time: '21:21',
                        daySend: ['Tuesday'],
                        unRead: false,
                        owner: false
                               
                    })
                    
                    // console.log(elem);
                    
    
                })
                messageId = 0
                refreshData()
                dispatch(setTypingState(false))



            }, 3000)



              
        } 
         
    }


    useEffect(() => {
            document.addEventListener("keydown", handleKeyPress, false);
        return() => {
         
            document.removeEventListener("keydown", handleKeyPress, false);


        }
    })




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
                            <button onClick={() => handleKeyPress({code: 'Enter'})}>
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
