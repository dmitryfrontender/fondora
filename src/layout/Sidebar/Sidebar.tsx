import React from 'react'
import './Sidebar.scss'
// import userAvatar from '../../assets/avatar/user-avatar.png'
import userAvatar from '../../assets/avatar/user-avatar.png'

import { Link, useLocation } from 'react-router-dom';

// import  Icon  from '../../assets/icons/icons.jsx';
import SVGIcon from '../../assets/icons/svgComponent.jsx';




const Dashboard = () => {

  const location = useLocation();
  const path = location.pathname;


  return (
    <>
      <aside className='Sidebar'>

        <SVGIcon name="mainLogo" className="main-logo" size={170} height={41}/>

        <ul>

          <Link to="/">

            <li > 

                <SVGIcon name="menuIcon" className={`menu-icon ${path === '/' ? 'active-menu' : ''}`}  size={30}/>

                <span>Главная</span>
              
            </li>
          </Link>

          <Link to="/likes">

            <li>
                <SVGIcon name="heartIcon" className={`menu-icon ${path === '/likes' ? 'active-menu' : ''}`}  size={30}/>

                <span>Лайки</span>
              
            </li>
          </Link>


          <Link to="/top-profiles">
            <li>
              <SVGIcon name="topProfile" className={`menu-icon ${path === '/top-profiles' ? 'active-menu' : ''}`} />
              <span>Топ-профили</span>


            </li>
          
          </Link>

          <Link to="/messages">
            <li>
              <SVGIcon name="messageIcon" className={`menu-icon ${path === '/messages' ? 'active-menu' : ''}`} />
              <span>Сообщения</span>


            </li>
          
          </Link>

          <Link to="/notifications">

            <li>
              <SVGIcon name="notification" className={`menu-icon ${path === '/notifications' ? 'active-menu' : ''}`} />
              <span>Уведомления</span>


            </li>
          
          </Link>

          <Link to="/settings">

            <li>
              <SVGIcon name="settings" className={`menu-icon ${path === '/settings' ? 'active-menu' : ''}`} />
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
