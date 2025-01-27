import React from 'react'
import './CommonFormIn.css'
import {NavLink} from 'react-router-dom'

import BigDish from '../../../../images/logo/form/dishBig.png'
import Pattern from '../../../../images/logo/form/pattern.png'
import {ReactComponent as Logo} from '../../../../images/logo/Logo.svg'

import {motion} from 'framer-motion'

const textRegister = [
    {title: 'Find Foods With Love', text: 'Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian, Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money.'},
    {title: 'Lorem ipsum dolor', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, totam?'},
    {title: 'More Than 2K+ Dishes Including', text: 'Amet consectetur adipisicing elit. Provident ea, mollitia ipsam cumque nihil eveniet quia sequi eaque! Commodi, nobis.'}
]

const CommonFormIn = ({children}) => {

    const [carouselText, setCarouselText] = React.useState(0)

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setCarouselText((elem) => (elem+1) % textRegister.length)
        }, 6000)

        return () => clearTimeout(timer)
    }, [carouselText])

    return (
        <>
            <div className="register">
                <div className="register-right">
                    <NavLink to='/' className="logo"><Logo /></NavLink>
                    { children }
                    <div className="register-footer">
                        <div className="register-footer-policy">Privacy Policy</div>
                        <div className="register-footer-copyright">Copyright 2022</div>
                    </div>
                </div>
                <motion.div 
                    initial={{x: '10%'}}
                    whileInView={{x: '0'}}
                    transition={{duration: 2, type: 'spring'}}
                    className="register-left">
                    <div className="register-dish">
                        <img src={BigDish} alt="" className="register-dish_img-dish"/>
                        <img src={Pattern} alt="" className="register-dish_img-pattern"/>
                    </div>
                    {textRegister.map((elem, index) => (
                        <div className={`register-block ${carouselText === index ? 'register-block-active' : ''}`} key={index}>
                            <h3 className="register-title">{elem.title}</h3>
                            <p className="register-text">{elem.text}</p>
                        </div>
                    ))}

                    <div className="register-switch-block">
                        {textRegister.map((elem, index) => (
                            <span className={`register-switch ${carouselText === index ? 'register-switch-active' : ''}`} key={index}></span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </>
    ) 
}

export default CommonFormIn