import React, { useEffect, useMemo, useState } from "react";
import chatBg from '../../assets/images/chatBg.png'
import SVGIcon from "../../assets/icons/svgComponent";
import { IMessages } from "../../model/MessagesModel";
// import TextareaAutosize from "react-textarea-autosize";
import { Link } from "react-router-dom";
// import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useDispatch, useSelector } from "react-redux";
import { setChatId } from "../../store/rootSlice";
import './Chat.scss'
import { messagesData } from "../../Data/MessagesData";
import { useParams } from "react-router-dom";
import userAvatar from '../../assets/avatar/user-avatar.png'
import EnterMessage from "../../components/EnterMessage/EnterMessage";
import { mobileScreenEnable } from "../../store/selectors";
import ProfileComponent from "../../components/ProfileComponent/ProfileComponent";





const Chat = () => {


    // const [options, setOptions] = useState({})
    // const [sliderRef, slider] = useKeenSlider(options)

    const [chatData, setChatData] = useState ({} as IMessages);
    const [mobileScreen, setMobileScreen] = useState(false);
    const mobileDimension = useSelector(mobileScreenEnable);
    // const [areaValue, setAreaValue] = useState('');
    // const [sendBtn, setSendBtn] = useState(false);



    const dispatch = useDispatch();


    let {id}: any = useParams();
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





    // const resizeArea = (e: any) => {

    //     if (e.target.value.length === 0) {
    //         setAreaValue('');
    //         setSendBtn(false);

    //     } else if (e.target.value.length <= 1) {

    //             setAreaValue(e.target.value.trim());
    //             setSendBtn(false);
    //             if (e.target.value !== ' ') {
    //                 setSendBtn(true);
    //             }

    //     } else if (e.target.value.length > 1) {
    //         setAreaValue(e.target.value);
    //         setSendBtn(true);

    //     }
    // }


    const checkMobileScreen = useMemo(() => {

        return    mobileDimension

    }, [mobileDimension]);

    useEffect(() => {
        dispatch(setChatId(id))
        messagesData.forEach((item:IMessages) => {

            if (item.id.toString() === id) {
                setChatData(item);

            }

        })

        checkMobileScreen ? setMobileScreen(true) : setMobileScreen(false)




    },[id, dispatch, checkMobileScreen])


    return(
        <>
            {!mobileScreen ?
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
                            {/* <div className="inputBlock">
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


                            </div> */}
                            <EnterMessage />

                        </div>


                    </div>

                    <ProfileComponent />

                </div>

            </div>
            :
            null

            }



        </>
    )
}



export default Chat
