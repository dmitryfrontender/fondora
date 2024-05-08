import React, { useEffect, useState } from "react";
import { UseChatId } from "../../utils/ChatId";
import chatBg from '../../assets/images/chatBg.png'
import SVGIcon from "../../assets/icons/svgComponent";
import { IMessages } from "../../model/MessagesModel";
import TextareaAutosize from "react-textarea-autosize";
import { Link } from "react-router-dom";
// import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import './Chat.scss'
import { messagesData } from "../../Data/MessagesData";
import userAvatar from '../../assets/avatar/user-avatar.png'
// import avatar1 from '../../assets/avatar/avatar1.png'
// import avatar2 from '../../assets/avatar/avatar2.png'
// import avatar3 from '../../assets/avatar/avatar3.png'
// import avatar4 from '../../assets/avatar/avatar4.png'


interface IProps {
    userId: string
}


const Chat = ({userId}: IProps) => {

    // const [options, setOptions] = useState({})
    // const [sliderRef, slider] = useKeenSlider(options)

    const [chatData, setChatData] = useState ({} as IMessages);
    const [areaValue, setAreaValue] = useState('');
    const [sendBtn, setSendBtn] = useState(false);
    // const [currentSlide, setCurrentSlide] = useState(0)
    // const [loaded, setLoaded] = useState(false)
    // const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    //     initial: 0,
    //     slideChanged(slider) {
    //     setCurrentSlide(slider.track.details.rel)
    //     },
    //     created() {
    //         setLoaded(true)
    //     },
    // })



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

    useEffect(() => {

       



        messagesData.forEach((item:IMessages) => {
     
            if (item.id.toString() === UseChatId(userId)) {
                setChatData(item);
              
            }
            
        })

    },[chatData, userId])
    

    return(
        <>
            <div className="page Chat">
                
                <div className="chatWrapper">
                    <div className="chatArea">
                        <div className="chatBg">
                            <img src={chatBg} alt="bg" />
                        </div>
                        <div className="chatItems">
                            <div className="topBlock">
                                <div className="companionAvatar">
                                    <img src={chatData.image} alt="avatar" />
                                    {
                                        chatData.userOnLine ? <div className="onLinePin"></div> : null
                                    }
                                </div>
                                <div className="companionDescription">
                                    <div className="avatars">
                                        <div className="avatar">
                                            <img src={userAvatar} alt="avatar" />
                                        </div>
                                        <div className="avatar rightAvatar">
                                            <img src={chatData.image} alt="avatar" />
                                        </div>
                                    </div>
                                    <div className="info">
                                        <span>
                                            Вы и {chatData.userName} образовали пару 

                                        </span>
                                    </div>
                                    <div className="date">
                                        <SVGIcon name="calendarIcon" size={14} />
                                        <span>13.11.2023</span>
                                    </div>

                                </div>
                                <div className="buttonsBlock">
                                    <button>
                                        <SVGIcon name="videoCallIcon" size={20} />
                                    </button>
                                    <button>
                                        <SVGIcon name="protectIcon" size={20} />
                                    </button>
                                    <Link to={"/messages"}>
                                        <button>
                                            <SVGIcon name="roundCloseBtn" size={20} />
                                        </button>
                                    </Link>
                                    
                                </div>
                                

                            </div>
                            <div className="chat">

                            </div>
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
                            
                        </div>
                        

                    </div>
                    <div className="userBlock">
                        {/* <div className="userAvatar" style={{backgroundImage: `url(${avatar1})`}}> */}
                        <div className="userAvatar">


                            {/* <div className="navigation-wrapper">
                                <div ref={sliderRef} className="keen-slider">


                                    <>
                                        {/* { 

                                            chatData.photos?.map((item, index) => {
                                                // console.log(item);
                                                
                                                return(
                                                    <div className={`keen-slider__slide number-slide${index === 0 ? 1 : index + 1}`} style={{backgroundImage: `url(${item})`}}></div>
                                                    // slider.update()
                                                    
                                                    // <div className={`keen-slider__slide number-slide${currentSlide}`} style={{backgroundImage: `url(${chatData.photos?[currentSlide]: null})`}}></div>

                                                    
                                                    
                                                    

                                                )
        
                                            })
                                            
                                        



                                        } */}
                                        {/* {[...Array(chatData.photos?.length).keys()].map((idx) => {

                                            

                                            
                                            // console.log(chatData.photos?.forEach((item: string, index) => {console.log(index === idx ? item: null)}));

                                            
                                            return (
                                            <div key={idx} className={`keen-slider__slide number-slide${idx === 0 ? 1 : idx + 1}`} style={{backgroundImage: `url(${chatData.photos?.[idx]})`}}>

                                                {/* <div>
                                                {
                                                    ? `${slidesDetails[idx].abs + 1}. ${
                                                        names[slidesDetails[idx].abs]
                                                    }`
                                                    : ""}
                                                </div> */}
                                            {/* </div>
                                            )
                                        })}
                                    
                                    
                                    </>  */}


{/* 
                                    <div className="keen-slider__slide number-slide1">1</div>
                                    <div className="keen-slider__slide number-slide2">2</div>
                                    <div className="keen-slider__slide number-slide3">3</div>
                                    <div className="keen-slider__slide number-slide4">4</div>
                                    <div className="keen-slider__slide number-slide5">5</div>
                                    <div className="keen-slider__slide number-slide6">6</div> 
                                </div>
                                {/* {loaded && instanceRef.current && (
                                <>
                                    <Arrow
                                    left
                                    onClick={(e: any) =>
                                        e.stopPropagation() || instanceRef.current?.prev()
                                    }
                                    disabled={currentSlide === 0}
                                    />

                                    <Arrow
                                    onClick={(e: any) =>
                                        e.stopPropagation() || instanceRef.current?.next()
                                    }
                                    disabled={
                                        currentSlide ===
                                        instanceRef.current.track.details.slides.length - 1
                                    }
                                    />
                                </>
                                )} */}
                            
                            
                                {/* </div>
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
                            )}  */}


                        </div>
                        <div className="userInfo">
                            <div className="mainInfo">
                                <span className="name">
                                    Валюха,&nbsp;
                                </span>
                                <span className="age">
                                    28
                                </span>
                                <SVGIcon name="fillVerification" size={16} />
                            </div>
                            <div className="additionalInfo">
                                <ul>
                                    <li>
                                        <SVGIcon name="homeIcon" size={14} />
                                        <span>Живет в New York, NY</span>
                                    </li>
                                    <li>
                                        <SVGIcon name="distanceIcon" size={14} />
                                        <span>9 km from you</span>
                                    </li>
                                    <li>
                                        <SVGIcon name="tall" size={14} />


                                        <span>178 см</span>
                                    </li>
                                    <li>
                                        <SVGIcon name="femaleGender" size={14} />
                                        <span>Гетеро Женщина</span>
                                    </li>
                                  
                                </ul>
                            </div>
                            <div className="description">
                                <p>
                                    Не люблю длинные переписки( лучше увидимся на нашем первом свидании.
                                    Пригласить можешь в заведение. Гулять п...
                                </p>
                            </div>
                        </div>

                    </div>
                    
                </div>

            </div>
            
        
        </>
    )
}



export default Chat

