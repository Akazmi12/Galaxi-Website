import React from 'react'
import './Homepage6.css'
import leftImg from '../Assets/google.svg'
import rightImg from '../Assets/apple.svg'
import fLogo from '../Assets/logo.svg'
import tagRight from '../Assets/tags.svg'
import copyImg from '../Assets/copyright.svg'

export const Homepage6 = (props) => {
    return (
        <div ref={props.refer} className='homepage6'>
            <div className='blue-left'></div>
            {/* <div className='blue-right'></div> */}
            <div className='text'>
                <div className='display-box'>
                    <div className='container-box'>
                        <h1>Try Galaxi App for free! </h1>
                        <p>Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel scelerisque
                            porttitor, leo quam vulputate nibh, sit amet blandit erat magna.</p>
                        <div className='button-container'>
                            <img src={leftImg} alt='' />
                            <img src={rightImg} alt='' />
                        </div>
                    </div>
                </div>

                <div className='blue-right'></div>
            </div>
            <div className='footer-box'>
                <div className='footer'>
                    <div className='test'>
                        <div className='display-flex'>
                            <img src={fLogo} alt="" />
                        </div>
                        <div className='text-display'>
                            <p className='footer-details'>Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel scelerisque porttitor, leo quam vulputate nibh, sit amet blandit erat magna.</p>
                        </div>

                    </div>
                </div>


                <div className='footer-tags'>
                    <div className='footer-left'>
                        <img src={copyImg} alt='' />
                    </div>
                    <div className='footer-right'>
                        <img src={tagRight} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}
