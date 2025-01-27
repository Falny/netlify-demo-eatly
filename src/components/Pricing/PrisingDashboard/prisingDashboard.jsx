import React from 'react'
import './prisingDashboard.css'

import {ReactComponent as Arrow} from '../../../images/pricing/arrow.svg'
import {ReactComponent as WhiteArrow} from '../../../images/pricing/white-arrows.svg'
import {ReactComponent as PurpleArrow} from '../../../images/pricing/purple-arrows.svg'

import Dashboard from '../../../images/pricing/dashboard.png'
import {motion} from 'framer-motion'


const PricingDashboar = () => {
    return (
        <>
            <div className="pricing">
                <div className="pricing-box">
                    <div className="pricing-head">
                        <Arrow className='pricing-head_img'/>
                        <h2 className="title pricing-title">Our Pricing</h2>
                    </div>
                    <div className="pricing-img">
                        <WhiteArrow className='pricing-img_white-img' />
                        <motion.img initial={{scale: 1.2}} whileInView={{scale: 1}} transition={{duration: 2, type: 'spring'}} src={Dashboard} alt="" />
                        <PurpleArrow className='pricing-img_purple-img' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PricingDashboar