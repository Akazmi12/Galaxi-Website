import React from 'react'
import './Homepage.css'
import leftMobile from '../Assets/left-mobile.svg'
import rightMobile from '../Assets/right-mobile.svg'
import play from '../Assets/play.svg'
import imgBanner from '../Assets/mobile-banner.svg'


export const Homepage = () => {
  return (
    <div className='home-page'>
      <div className='yellow-box'></div>
      <div className='home-container'>
        <div className='mobile-banner'>
          <img src={imgBanner} alt='banner' />
        </div>
        <div className='home-text'>
          <h1>Galaxi is for<br />everyone</h1>
          <p>The world’s number 1 stocks screener. Get hottest stocks<br />picks in the world using AI.</p>
          <div className='video-button'>Explainer Video <img src={play} alt='play' /></div>
        </div>

        <div className='mobile-img'>
          <img className='left-mob' src={leftMobile} alt='mobile' />
          <img className='right-mob' src={rightMobile} alt='mobile' />
        </div>
      </div>
    </div>
  )
}
