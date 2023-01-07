import React from 'react'
import './Contact.scss'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="wrapper">
                <span>BE IN TOUCH WITH US:</span>
                <div className="mail">
                    <input type="text" placeholder='Enter your e-mail' />
                    <button>JOIN US</button>
                </div>
                <div className="icons">
                    <img src="/img/facebook.svg" alt="" />
                    <img src="/img/instagram.svg" alt="" />
                    <img src="/img/pinterest.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contact
