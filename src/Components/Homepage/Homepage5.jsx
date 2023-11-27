import React from 'react'
import './Homepage5.css'
import touchImg from '../Assets/get-touch.svg'

export const Homepage5 = (props) => {
  return (
    <div ref={props.refer} className='homepage5'>
        <div className='left-image'>
            <img src={touchImg} alt=''></img>
        </div>
        <div className='right-form'>
            <form>
                <h1>Get In Touch</h1>
                <p>Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel scelerisque
porttitor, leo quam vulputate nibh, sit amet blandit erat magna.</p>
                <input type='text' placeholder='Name'></input>
                <input type='text' placeholder='Email'></input>
                <input type='text' placeholder='Phone'></input>
                <div className='text_area'>
                <input type='textarea' placeholder='Write Comment'></input>
                </div>
                <button type='submit'>Send Message</button>
            </form>

        </div>
    </div>
  )
}
