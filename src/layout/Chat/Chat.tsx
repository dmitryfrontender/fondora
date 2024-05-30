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
import { protectModalState, reportUserAvatar, reportUserName } from "../../store/ProtectSlice";
import ProfileComponent from "../../components/ProfileComponent/ProfileComponent";
import { setVideoChatModal, setUserName, setUserAvatar } from "../../store/VideoChatSlice";
import Report from "../../components/ReportComponent/Report";
import { useLocation } from "react-router-dom";
import { setReportPage } from "../../store/ProtectSlice";





const Chat = () => {


    // const [options, setOptions] = useState({})
    // const [sliderRef, slider] = useKeenSlider(options)

    const [chatData, setChatData] = useState ({} as IMessages);
    const [mobileScreen, setMobileScreen] = useState(false);
    const mobileDimension = useSelector(mobileScreenEnable);
    const reportComponent = useSelector((state: any) => state.ProtectState.reportComponent);
    const [pathLocation, setPathLocation] = useState('');
    // const [areaValue, setAreaValue] = useState('');
    // const [sendBtn, setSendBtn] = useState(false);
    const location = useLocation();


    // console.log(reportComponent);

    // const sidebar = document.querySelector('.Sidebar');
    // console.log(sidebar);


    // const checkSideBarClick = (path: string) => {
        


        
    // }
    



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

        if (pathLocation === '') {
            setPathLocation(location.pathname);
        } else if (pathLocation !== location.pathname) {
            setPathLocation(location.pathname);
            dispatch(setReportPage(false));
        }
        

        
        dispatch(setChatId(id))
        messagesData.forEach((item:IMessages) => {

            if (item.id.toString() === id) {
                setChatData(item);

            }

        })

        checkMobileScreen ? setMobileScreen(true) : setMobileScreen(false)

        return () => {
            dispatch(setReportPage(false))

        }





    },[id, dispatch, checkMobileScreen, mobileDimension, pathLocation, location.pathname]);


    return(
        <>
            {!mobileScreen ?
                
                <div className="page Chat">

                    <div className="chatWrapper">
                        {
                            !reportComponent ?
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
                                            <button onClick={() => {
                                                dispatch(setVideoChatModal(true))
                                                dispatch(setUserName(chatData.userName))
                                                dispatch(setUserAvatar(chatData.image))

                                            }}>
                                                <SVGIcon name="videoCallIcon" size={20} />
                                            </button>
                                            <button onClick={() => {
                                                dispatch(protectModalState(true));
                                                dispatch(reportUserAvatar(chatData.image));
                                                dispatch(reportUserName(chatData.userName));
                                            }}>
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
                                    
                                    <EnterMessage />

                                </div>


                                </div>
                                :
                                <Report/>
                        }
                        
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
