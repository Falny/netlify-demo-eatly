import React, {lazy} from 'react'
import './quality.css'


import DownloadArrow from '../../../images/main/quality/quality-download.png'
import {ReactComponent as QualityArrow } from '../../../images/main/quality/quality-arrow.svg'
import QualityBg from '../../../images/main/quality/quality-bg.png'

import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

const InsideRest = lazy(() => import('../../Menu/Inside_restaurants/insideRest'))
const ListRestaurants = lazy(() => import('../../Common/LisrRestaurants/listRestaurants'))

const Quality = (props) => {

    const transition = {duration: 1, type: 'string'}

    const randomDishes = (dish, count) => {
        const rand = dish.sort(() => 0.5 - Math.random())
        return rand.slice(0, count)
    }

    const dish = props.restaurants.flatMap(rest => rest.goods)
    const getRand = randomDishes(dish, 5)

    return (
        <>
            <div className="quality">
                <motion.div
                    initial={{x: '-10%'}}
                    whileInView={{x: '0'}}
                    transition={transition}
                    className="quality-left" style={{backgroundImage: `url(${QualityBg})`}}>
                </motion.div>
                <div className="quality-right">
                    <div className="title">Premium <span className="title-perple">Quality</span> < br /> For Your Health</div>
                    <ul className="quality-right-list">
                        <li className="quality-right-item">Premium quality food is made with ingredients that are packed with essential vitamins, minerals.</li>
                        <li className="quality-right-item">These foods promote overall wellness by support healthy digestion and boosting immunity</li>
                    </ul>
                    <div className="quality-right-download">
                        <a href="#" className="quality-right-download-link">Download</a>
                        <img src={DownloadArrow} className='quality-right-download-arrow'/>
                    </div>
                    <div><QualityArrow className='quality-right-arrow'/></div>
                </div>
            </div>

            <div className="restaurants">
                <h2 className="title title-restaurants">Our Top <span className="title-perple">Restaurants</span></h2>
                <div className="restaurants-list">
                    <ListRestaurants Status={props.Status} restaurants={props.restaurants.slice(0, 3)}/>
                </div>
                <Link to='/restaurants' className="view-all">View All <span className="view-all_arrow">&rarr;</span></Link>
            </div>

            <div className="dishes">
                <h2 className="title title-restaurants">Our Top <span className="title-perple">Dishes</span></h2>
                <InsideRest Status={props.Status} restaurants={getRand}/>
            </div>
        </>
    )
}

export default Quality