import React from 'react'
import './carousel.css'

import Back from '../../../images/main/subscribe/back.png'
import Icons from '../../../images/main/subscribe/mini_icons.png'
import Dish from '../../../images/main/subscribe/dish.png'
import Dish1 from '../../../images/main/dishes/dish1.png'
import Dish3 from '../../../images/main/dishes/dish3.png'

import {ReactComponent as Lines} from '../../../images/menu/search/lines.svg'


const carousel = [
    {id:1, name: '50% OFF', day: 'WEEKEND', img: Dish},
    {id:2, name: '2% OFF', day: 'DAYS', img: Dish1},
    {id:3, name: '1 DISH FREE', day: 'MONTH', img: Dish3},
]

export const Carousel = () => {

    const [carouselIndex, setCarouselIndex] = React.useState(0)

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setCarouselIndex((index) => (index + 1) % carousel.length)
        }, 6000)

        return () => clearTimeout(timer)
        
    }, [carouselIndex])

    return (
        <>
            <div className="menu-carousel">
                <Lines className='carousel-lines'/>
                {carousel.map((elem) => (
                    <div key={elem.id} className={`menu-carousel-box ${carouselIndex === elem.id-1 ? 'menu-carousel-active' : ''}`}  style={{backgroundImage: `url(${Back}), url(${Icons})`}}>
                        <p className="menu-carousel-name">{elem.name}</p>
                        <p className="menu-carousel-day">{elem.day}</p>
                        <img src={elem.img} alt="" className="menu-carousel-img" />
                    </div>
                ))}

                <div className="menu-carousel-btn-box">
                    {carousel.map((elem) => (
                        <button key={elem.id} className={`menu-carousel-btn ${carouselIndex === elem.id-1 ? 'menu-btn-active' : ''}`}></button>
                    ))}
                </div>
            </div>
        </>
    )
}
