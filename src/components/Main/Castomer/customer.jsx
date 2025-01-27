import React from 'react'
import './customer.css'

import Icon1 from '../../../images/main/customer/icon1.png'
import Icon2 from '../../../images/main/customer/icon2.png'

import { ReactComponent as EnjoyFiveStar } from '../../../images/main/enjoy/five_stars.svg'
import {ReactComponent as Quotes} from '../../../images/customer/quotes.svg'

const carousel = [
    {id: 1, img: Icon1, name: 'Alexander R.', data: '01 Year With Us', quotes: '“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”'},
    {id: 2, img: Icon2, name: 'Satina F.', data: '0.5 Year With Us', quotes: '“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”'},
    {id: 3, img: Icon1, name: 'Dmitriy L.', data: '1.3 Year With Us', quotes: '“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”'},
    {id: 4, img: Icon1, name: 'Olga T.', data: '4.2 Year With Us', quotes: '“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”'},
    {id: 5, img: Icon2, name: 'Feodor B.', data: '1.2 Year With Us', quotes: '“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”'},
    {id: 6, img: Icon1, name: 'Tolyaty C.', data: '0.9 Year With Us', quotes: '“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”'},
]

export const Customer = () => {

    const [isDragging, setIsDragging] = React.useState(false)
    const startX = React.useRef(0)
    const startScrollLeft = React.useRef(0)
    const [position, setPosition] = React.useState(0)
    const carouselRef = React.useRef(null)

    const [activeIndex, setActiveIndex] = React.useState(0)
    const itemRef = React.useRef([])


    const startMove = (e) => {
        setIsDragging(true)
        startX.current = e.pageX
        startScrollLeft.current = position
    }

    const startMoving = (e) => {
        if (!isDragging) return;

        const newPosition = startScrollLeft.current + (e.pageX - startX.current);

        const widthCarousel = carouselRef.current.scrollWidth;
        const widthUserView = carouselRef.current.clientWidth;

        const startPosition = 0;
        const endPosition = widthUserView - widthCarousel;

        const finalPosition = Math.min(startPosition, Math.max(endPosition, newPosition))

        const itemWidth = itemRef.current[0].offsetWidth;
        const newActiveIndex = Math.round(-newPosition / itemWidth)

        if (newActiveIndex !== activeIndex){
            setActiveIndex(newActiveIndex)
        }

        setPosition(finalPosition)
        
    }

    const endMoving = () => {
        setIsDragging(false)
    }

    return (
        <>
        <div className="container-carousel">
            <div className="customer">
                <h2 className="title customer-title"><span className="title-perple">Customer</span> Say</h2>
                <ul style={{transform: `translateX(${position}px)`}} className="customer-list" ref={carouselRef} onMouseDown={startMove} onMouseMove={startMoving} onMouseUp={endMoving}>
                    {carousel.map((elem, index) => (
                        <li key={elem.id} className={`customer-item ${index === activeIndex ? 'active-carousel' : ''}`} ref={el => itemRef.current[index] = el}>
                             {index === activeIndex && 
                                <div className="customer-item-block">
                                    <div className="customer-item-left">
                                        <img src={elem.img} alt="" className="customer-item-icon" />
                                        <div className="customer-item-text">
                                            <p className="customer-item-name">{elem.name}</p>
                                            <div className="customer-item-data">{elem.data}</div>
                                        </div>
                                    </div>
                                    <div className="customer-item-right">
                                        <Quotes />
                                    </div>
                            </div>}
                            
                            <div className="customer-item-quotes">{elem.quotes}</div>
                            <EnjoyFiveStar />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    )
}

