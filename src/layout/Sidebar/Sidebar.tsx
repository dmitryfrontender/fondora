import React, { useEffect, useState } from 'react'
import './Sidebar.scss'
// import userAvatar from '../../assets/avatar/user-avatar.png'
import userAvatar from '../../assets/avatar/user-avatar.png'
import MessageSidebar from '../../components/MessageSidebar/MessageSidebar';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { messagesData } from '../../Data/MessagesData';
import { MessageState, NewMessageState } from '../../store/rootSlice';
import { IMessages } from '../../model/MessagesModel';

// import  Icon  from '../../assets/icons/icons.jsx';
import SVGIcon from '../../assets/icons/svgComponent.jsx';
// import { useChatId } from '../../utils/ChatId';
import { UseChatId } from '../../utils/ChatId';




const Dashboard = () => {

  const location = useLocation();
  const path = location.pathname;
  const dispatch = useDispatch();
  const likeState = useSelector((state: any) => state.mainState.newLike);
  const messageState = useSelector((state: any) => state.mainState.isMessage);
  const notificationState = useSelector((state: any) => state.mainState.newNotification);
  const settingState = useSelector((state: any) => state.mainState.newSetting);
  const isNewMessage = useSelector((state: any) => state.mainState.newMessage);
  // const id = useParams();

  const [ newMessageState, setNewMessageState ] = useState(false);

  // console.log(useChatId());
  




  const checkPath = (path: string) => {
 
    
    switch (path) {
      case '/messages':
        return '/messages';
      case `/messages/chat/:${UseChatId(path)}`:
        return `/messages/chat/:${UseChatId(path)}`;
      default: return false
    }
  }




  useEffect(() => {
    const checkMessages = () => {
      messagesData.length > 0 ? dispatch(MessageState('messages-true')) : dispatch(MessageState('messages-false'));
      messagesData.forEach((item:IMessages) => {
        item.messages.forEach((message) => {
          if (message.unRead && !newMessageState) {
            dispatch(NewMessageState('newMessage-true'))
            setNewMessageState(true);

          } else if (!message.unRead && newMessageState) {
            dispatch(NewMessageState('newMessage-false'))
            setNewMessageState(false);

          }

        })
      })
  
      
    }

    checkMessages();


    
  }, [likeState, messageState, notificationState, settingState, isNewMessage, dispatch]);


  return (
    <>
      <aside className='Sidebar'>

        <SVGIcon name="mainLogo" className="main-logo" size={170} height={41}/>

        {/* <Routes>

          <Route path="/messages" element={<MessageSidebar />} />

        </Routes> */}

        {
          checkPath(path)  && messageState ? 
            <MessageSidebar /> 
            :
            <ul>

            <Link to="/">

              <li > 
                  <div className="iconWrapper">
                    <SVGIcon name="menuIcon" className={`menu-icon ${path === '/' ? 'active-menu' : ''}`}  size={30}/>
                  </div>
                  <span>Главная</span>
              </li>
            </Link>

            <Link to="/likes">

              <li>
                  <div className="iconWrapper">
                    <SVGIcon name="heartIcon" className={`menu-icon ${path === '/likes' ? 'active-menu' : ''}`}  size={30}/>
                    {likeState ? <div className="pinnedItem"></div> : null}
                    {/* <div className="pinnedItem"></div> */}
                  </div>
                  <span>Лайки</span>
                
              </li>
            </Link>


            <Link to="/top-profiles">
              <li>
                <div className="iconWrapper">
                  <SVGIcon name="topProfile" className={`menu-icon ${path === '/top-profiles' ? 'active-menu' : ''}`} />
                </div>
                <span>Топ-профили</span>   
              </li>
            
            </Link>

            <Link to="/messages">
              <li>
                <div className="iconWrapper">
                  <SVGIcon name="messageIcon" className={`menu-icon ${path === '/messages' ? 'active-menu' : ''}`} />
                  {isNewMessage ? <div className="pinnedItem"></div> : null}
                </div>
                <span>Сообщения</span>
              </li>
            
            </Link>

            <Link to="/notifications">

              <li>
                <div className="iconWrapper">
                  <SVGIcon name="notification" className={`menu-icon ${path === '/notifications' ? 'active-menu' : ''}`} />
                  {notificationState ? <div className="pinnedItem"></div> : null}
                </div>
                <span>Уведомления</span>
              </li>
            
            </Link>

            <Link to="/settings">

              <li>
                <div className="iconWrapper">
                  <SVGIcon name="settings" className={`menu-icon ${path === '/settings' ? 'active-menu' : ''}`} />
                  {settingState ? <div className="pinnedItem"></div> : null}
                </div>
                <span>Настройки</span>
              </li>
            
            </Link>

            </ul>
        }



        <Link to="/my-profile">
          <div className="userBlock">
            <div className="avatar">
              <img src={userAvatar} alt="avatar" />
              
            </div>
            <div className="userInfo">
                <p>Alex</p>
                <p>@pixelwizardalex</p>
            </div>

          </div>
        </Link>
        
          
        



      </aside>
      
    </>
  )
}


export default Dashboard
