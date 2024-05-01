import React from 'react'
import './Sidebar.scss'
// import userAvatar from '../../assets/avatar/user-avatar.png'
import userAvatar from '../../assets/avatar/user-avatar.png'

import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import  Icon  from '../../assets/icons/icons.jsx';
import SVGIcon from '../../assets/icons/svgComponent.jsx';




const Dashboard = () => {

  const location = useLocation();
  const path = location.pathname;

  const likeState = useSelector((state: any) => state.mainState.newLike);
  const messageState = useSelector((state: any) => state.mainState.newMessage);
  const notificationState = useSelector((state: any) => state.mainState.newNotification);
  const settingState = useSelector((state: any) => state.mainState.newSetting);


  return (
    <>
      <aside className='Sidebar'>

        <SVGIcon name="mainLogo" className="main-logo" size={170} height={41}/>

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
                {messageState ? <div className="pinnedItem"></div> : null}
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
