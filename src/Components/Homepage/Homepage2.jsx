import React from 'react'
import './Homepage2.css'
import img1 from '../Assets/1-image.svg'
import img2 from '../Assets/2-image.svg'
import img3 from '../Assets/3-image.svg'

export const Homepage2 = (props) => {
  return (
    <div ref={props.refer} className='Homepage2'>
      <div className='green-container'>
        <div className='green-eclipse'></div>
      </div>
      <div className='box'>
        <div className='page-text'>
          <h1>How it Works?</h1>
          <p>Is amazing, modern and clean landing page for showcaseyour app anything else.</p>
        </div>
        {/* </div> */}

        <div className='cards'>
          {/* <div className='cards-tab'> */}
          <div className='card-1'>
            <p className='super-script-01'> 01</p>
            <div className='card-align'>
              <img src={img1} alt='' />
              <h1>Sign Up:</h1>
              <hr className='line-1' />
              <p>Lorem ipsum dolor sit amet consectet adipiscing elit eget quamumto.</p>
            </div>
          </div>
          <div className='card-1'>
            <p className='super-script'>02</p>
            <div className='card-align'>
              <img src={img2} alt='' />
              <h1>Subscription:</h1>
              <hr className='line-2' />
              <p>Lorem ipsum dolor sit amet consectet adipiscing elit eget quamumto.</p>
            </div>
          </div>
          {/* </div> */}
          <div className='card-last'>
            <p className='super-script'>03</p>
            <div className='card-align'>
              <img src={img3} alt='' />
              <h1>Explore:</h1>
              <hr className='line-3' />
              <p>Lorem ipsum dolor sit amet consectet adipiscing elit eget quamumto.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
