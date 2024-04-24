import React from 'react'
import './Sidebar.scss'
// import userAvatar from '../../assets/avatar/user-avatar.png'
import userAvatar from '../../assets/avatar/user-avatar.png'

import { Link, useLocation } from 'react-router-dom';

import { Icon } from '../../assets/icons/icons';



const Dashboard = () => {

  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <aside className='Sidebar'>

        <Icon id="main-logo" className="main-logo" />


        <ul>

          <Link to="/">

            <li > 
                <Icon id="main-menu" className={`menu-icon ${path === '/' ? 'active-menu' : ''}`} />
                <span>Главная</span>
              
            </li>
          </Link>

          <Link to="/likes">

            <li>
                <Icon id="likes-menu" className={`menu-icon ${path === '/likes' ? 'active-menu' : ''}`} />
                <span>Лайки</span>
              
            </li>
          </Link>


          <Link to="/top-profiles">
            <li>
              <Icon id="star-menu" className={`menu-icon ${path === '/top-profiles' ? 'active-menu' : ''}`} />
              <span>Топ-профили</span>


            </li>
          
          </Link>

          <Link to="/messages">
            <li>
              <Icon id="chat-menu" className={`menu-icon ${path === '/messages' ? 'active-menu' : ''}`} />
              <span>Сообщения</span>


            </li>
          
          </Link>

          <Link to="/notifications">

            <li>
              <Icon id="notification-menu" className={`menu-icon ${path === '/notifications' ? 'active-menu' : ''}`} />
              <span>Уведомления</span>


            </li>
          
          </Link>

          <Link to="/settings">

            <li>
              <Icon id="setting-menu" className={`menu-icon ${path === '/settings' ? 'active-menu' : ''}`} />
              <span>Настройки</span>


            </li>
          
          </Link>

        </ul>

        <div className="userBlock">
          <div className="avatar">
            <img src={userAvatar} alt="avatar" />
            
          </div>
          <div className="userInfo">
              <p>Alex</p>
              <p>@pixelwizardalex</p>
          </div>

        </div>
          
        



      </aside>
      
    </>
  )
}


export default Dashboard
