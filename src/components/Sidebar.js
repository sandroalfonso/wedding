import React, { useState } from 'react'
import Logo from '../assets/images/logo.png'
function Sidebar () {
  const [show, setShow] = useState(false);
  const [close, setClose] = useState(true);
  const openMenu = (e) => {
    e.preventDefault();
    setShow(!show);
    document.body.classList.toggle('slide');
  }

  const closeMenu = (e) => {
    e.preventDefault();
    setClose(close);
    document.body.classList.toggle('slide');
  }



  return (
    <>
      <a href='/' onClick={openMenu} className={`js-raman-nav-toggle raman-nav-toggle${show ? ' active': ''}`}>
        <i></i>
      </a>
      <aside id='raman-aside'>
        <div className='raman-logo'>
          <a href='/'>
            <img src={Logo} alt='' />
            <h6>11.26.2022</h6>
          </a>
        </div>
        <nav className='raman-main-menu'>
          <ul>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#countdown'>Countdown</a>
            </li>
            <li>
              <a href='#healthprotocol'>Health Protocols</a>
            </li>
            <li>
              <a href='#gallery'>Gallery</a>
              
            </li>
            <li>
              <a href='#giftregistry'>Gift Registry</a>
            </li>
            <li>
                <a href='#whenwhere'>When & Where</a>
            </li>
            <li>
              <a href='#rsvp'>R.S.V.P</a>
            </li>
            <li>
              <a href='https://us02web.zoom.us/j/81900825676?pwd=bGc1UnNtSm5qaHp4RlZWTk5qQzduQT09&fbclid=IwAR31Q3BF6RW1PrDj8uUulGqpusf8p8gNsQLPsiOXjgLXQ0HWWd6uHSCVnok#success'>Zoom</a>
            </li>
          </ul>
        </nav>
        <div className='footer1'>
          {' '}
          <span className='separator'></span>
          <p>
            Ramon & Amanda
            <br />
           
          </p>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
