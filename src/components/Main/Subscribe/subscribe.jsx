import React from 'react'
import './subscribe.css'

import Back from '../../../images/main/subscribe/back.png'
import Icons from '../../../images/main/subscribe/mini_icons.png'
import Dish from '../../../images/main/subscribe/dish.png'

import {motion} from 'framer-motion'

const Subscribe = () => {
    const transition = {duration: 2, type: 'spring'}
    return (
        <>
            <div className="subscribe">
                <div className="subcsribe-img" style={{backgroundImage: `url(${Back}), url(${Icons})`}}>
                    <div className="subscribe-box">
                        <h2 className="subscribe-title">GET 50%</h2>
                        <div className="subscribe-email">
                            <input type="text" className="subscribe-input" placeholder=' Enter Your Email Address'/>
                            <button className="subscribe-subscribe">SUBSCRIBE</button>
                        </div>
                    </div>
                    <motion.div
                        initial={{rotate: '180deg'}}
                        whileInView={{rotate: '0deg'}}
                        transition={transition}
                        className="subcsribe_dish-img" style={{backgroundImage: `url(${Dish})`}}>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Subscribe