import React, { useState, useRef } from 'react'
import './Navbar.css'
import logoImg from '../Assets/logo.svg'
import menuBar from '../Assets/menu-bars.svg'
import fbImg from '../Assets/facebook.svg'
import inImg from '../Assets/instagram.svg'
import pnImg from '../Assets/pinterest.svg'
import twImg from '../Assets/twitter.svg'
import crossImg from '../Assets/cross.svg'

import { Homepage } from '../Homepage/Homepage';
import { Homepage2 } from '../Homepage/Homepage2';
import { Homepage3 } from '../Homepage/Homepage3';
import { Homepage4 } from '../Homepage/Homepage4';
import { Homepage5 } from '../Homepage/Homepage5';
import { Homepage6 } from '../Homepage/Homepage6';


export const Navbar = () => {
  const howWorks = useRef(null);
  const whyGalaxi = useRef(null);
  const feat = useRef(null);
  const contactUs = useRef(null);

  const scrollToSec = (elementRef) => {
    console.log(elementRef);
    // (isActive ? setName('nav-menu responsive') : setName('nav-menu'));
    // (isActive ? setBr('') : setBr('hide'));
    // (isActive ? setCross('hide') : setCross(''));
    // (isActive ? setLogo('nav-logo') : setLogo('nav-logo nav-logo-click'));
    // setIsActive(current => !current);
    menuIcon();
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    });
  }


  const [isActive, setIsActive] = useState(false);
  const [logoCls, setLogo] = useState('nav-logo')
  const [clsName, setName] = useState('nav-menu responsive');
  const [brName, setBr] = useState('');
  const [crossName, setCross] = useState('hide');

  const menuIcon = () => {
    (isActive ? setName('nav-menu responsive') : setName('nav-menu'));
    (isActive ? setBr('') : setBr('hide'));
    (isActive ? setCross('hide') : setCross(''));
    (isActive ? setLogo('nav-logo') : setLogo('nav-logo nav-logo-click'));
    setIsActive(current => !current);
    console.log(isActive)
  }

  return (
    <>
      <div className='home'>
        <div className="nav-bar">

          <div className='mob-navbar'>
            {/* left logo */}
            <div className={logoCls}>
              <img src={logoImg} alt="logo"></img>
            </div>


            {/* menubar icons */}
            <div className='menu-bar'>
              <img src={menuBar} className={brName} alt='' onClick={menuIcon} />
              <img src={crossImg} className={crossName} alt='link' onClick={menuIcon} />
            </div>

          </div>

          {/* menu buttons */}
          <div className='menu-box'>
            <ul className={clsName}>
              <li className='menu-symbol'>MENU</li>
              <li className='active'  onClick={() => scrollToSec(howWorks)}>How it works?</li>
              <li onClick={() => scrollToSec(whyGalaxi)}>Why Galaxi?</li>
              <li onClick={() => scrollToSec(feat)}>Features</li>
              <li onClick={() => scrollToSec(contactUs)}>Contact Us</li>
              <li className='getApp'>Get App</li>
              <li className='social-button'>Social Apps</li>
              <li className='social-links'>
                <img src={fbImg} alt='link' />
                <img src={inImg} alt='link' />
                <img src={pnImg} alt='link' />
                <img src={twImg} alt='link' />
              </li>
            </ul>
          </div>

        </div>
      </div>
      <Homepage />    
      <Homepage2 refer={howWorks}/>
      <Homepage3 refer={whyGalaxi} fet={feat}/>  
      <Homepage4 />
      <Homepage5 refer={contactUs}/>
      <Homepage6 />
    </>
  )
}

export default Navbar;