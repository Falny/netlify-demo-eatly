import React from 'react'
import './contact.css'

import {ReactComponent as Stars} from '../../images/contact/starses_contact.svg'
import {ReactComponent as Arrow} from '../../images/contact/arrow_contact.svg' 
import {ReactComponent as ArrowRightBox} from '../../images/contact/arrow-right-block.svg'
import Telephone from '../../images/main/quality/quality-bg.png'

import {motion} from 'framer-motion'


const Contact = () => {

    const [seeName, setSeeName] = React.useState('')
    const [seeEmail, setSeeEmail] = React.useState('')
    const [seeText, setSeeText] = React.useState('')

    return (
        <>
            <div className="contact">
                <div className="contact-left">
                    <div className="contact-logo">Just Contact</div>
                    <Stars className='contact-stars'/>
                    <Arrow className='contact-arrow'/>
                    <motion.img initial={{x: '-10%'}} whileInView={{x: '0'}} transition={{duration: 2, type: 'spring'}} src={Telephone} alt="" className="contact-img-tel" />
                </div>
                <div className="contact-right">
                    <h3 className="title">Customer <span className="title-perple">Support</span></h3>
                    <form action="" className='contact-form'>
                        <input onChange={(e) => setSeeName(e.target.value)} value={seeName} type="text" className="contact-form-item contact-form-name" placeholder='FULL NAME'/>
                        <input onChange={(e) => setSeeEmail(e.target.value)} value={seeEmail} type="text" className="contact-form-item contact-form-email" placeholder='ENTER YOUR EMAIL'/>
                        <textarea onChange={(e) => setSeeText(e.target.value)} value={seeText} className="contact-form-item contact-form-texarea" placeholder='ENTER THE PROBLEM OR QUERY'></textarea>
                    </form>
                    <button type='submit' className="contact-right-btn">Send Now</button>
                    <ArrowRightBox className='contact-right-arrow' />
                </div>
            </div>
        </>
    )
}

export default Contact