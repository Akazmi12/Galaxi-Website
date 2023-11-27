import React from 'react'
import './Homepage4.css'
import bigMobile from '../Assets/big-mobile.svg'
import appIcon from '../Assets/apple-icon.svg'
import playIcon from '../Assets/play-icon.svg'


export const Homepage4 = () => {
    return (
        <div className='Homepage4'>
            <div className='blue-box'>
                <div className='box-left'>
                    <h1 className='logo-text'>Available on</h1>
                    <h1 className='logo-text-sm'>App Store, Play Store</h1>
                    <p className='logo-detail'> Lorem Ipsum is simply dummy text of the printing and typesetting industry . Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                        a galley of type and scrambled it to make a type specimen book</p>
                    <div className='icons'>
                        <img src={playIcon} alt='play' />
                        <img src={appIcon} alt='apple' />
                    </div>
                </div>
                <div className="box-right">
                    <img src={bigMobile} alt='mobile' />
                </div>
            </div>
        </div>
    )
}
