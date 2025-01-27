import React from 'react'
import './purchases.css'

import Dish1 from '../../../images/main/dishes/dish1.png'
import Dish2 from '../../../images/main/dishes/dish2.png'
import Dish3 from '../../../images/main/dishes/dish3.png'

import {ReactComponent as ArrowDown} from '../../../images/main/purchases/arrow-down.svg'

import Icon1 from '../../../images/main/purchases/icon1.png'
import Icon2 from '../../../images/main/purchases/icon2.png'

import {motion} from 'framer-motion'

const dishes = [
    {id: 1, name: 'Chicken Hell', img: Dish1, status: 'On The Way', time: '3:09 PM'},
    {id: 2, name: 'Swe Dish', img: Dish2, status: 'Delivered', time: 'Yesterday'},
    {id: 3, name: 'Fish Hell Veg', img: Dish3, status: 'Cancelled', time: 'Yesterday'},
]

const purch = [
    {id: 1, option: 'Month', img: Icon1, title: 'Expense', grow: 'Increased By 10%', price: '409.00', growLine: '85'},
    {id: 2, option: 'Month', img: Icon2, title: 'Vocher Usage', grow: 'Increased By 5%', price: '45.78', growLine: '54'},
    {id: 3, option: 'Week', img: Icon1, title: 'Expense', grow: 'Increased By 7%', price: '386.33', growLine: '56'},
    {id: 4, option: 'Week', img: Icon2, title: 'Vocher Usage', grow: 'Increased By 2%', price: '34.98', growLine: '24'},
    {id: 3, option: 'Day', img: Icon1, title: 'Expense', grow: 'Increased By 12%', price: '437.21', growLine: '97'},
    {id: 4, option: 'Day', img: Icon2, title: 'Vocher Usage', grow: 'Increased By 6%', price: '47.64', growLine: '63'},
]

const option = ['Month', 'Week', 'Day']

const Purchases = () => {

    const transition = {duration: 2, type: 'spring'}

    const [variant, setVariant] = React.useState('Month')
    const [isOpen, setIsOpen] = React.useState(false)

    const Grow = {
        Cancelled: 'purchases-grow-red'
    }

    const ColorLine = {
        'Expense': ['purchases-right-line-perple', 'purchases-right_main-line-perple'],
        'Vocher Usage': ['purchases-right-line-orange', 'purchases-right_main-line-orange'],
    }

    const clickVariant = (current) => {
        setVariant(current)
        setIsOpen(false)
    }

    return (
            <div className="purchases">
                <div className="purchases-left">
                    <h2 className="title">Control <span className="title-perple">Purchases</span> < br /> Via Dashboard</h2>
                    <motion.ul
                        initial={{x: '-10%'}}
                        whileInView={{x: '0'}}
                        transition={transition}
                        className="purchases-list">
                        {dishes.map((elem) => (
                            <li key={elem.id} className="purchases-item">
                                <div className="purchases-item-box">
                                    <img src={elem.img} alt="" />
                                    <div className="purchases-item-text">
                                        <div className="purchases-item-title">{elem.name}</div>
                                        <div className={`purchases-item-mini-title ${Grow[elem.status]}`}>{elem.status}</div>
                                    </div>
                                </div>
                                <div className="purchases-item-time">{elem.time}</div>
                            </li>
                        ))}
                    </motion.ul>
                </div>
                <motion.div 
                    initial={{x: '5%'}}
                    whileInView={{x: '0'}}
                    transition={transition}
                    className="purchases-right">
                    <div className="purchases-right-box">
                        <div className="purchases-right-head">
                            <h3 className="purchases-right-title">Purchases</h3>

                            <div className="purchases-right-select-container">
                                <div className="purchases-right-select-head" onClick={() => setIsOpen(!isOpen)}>
                                    <div className="purchases-right-select-current">{variant}</div>
                                    <ArrowDown />
                                </div>
                                
                                {isOpen && (
                                    <div className="purchases-right-select">
                                        {option.map((elem, index) => (
                                            <div key={index} onClick={() => clickVariant(elem)} className="purchases-right-option">{elem}</div>
                                        ))}
                                    </div>
                                )}
                                
                            </div>
                            
                        </div>
                        <ul className="purchases-right-list">
                            {purch.filter((elem) => elem.option === variant).map((elem) => (
                                <li key={elem.id} className="purchases-right-item">
                                    <div className="purchases-right-item-card">
                                        <div className="purchases-right-item-box">
                                            <img src={elem.img} alt="" />
                                            <div className="purchases-right-item-box-text">
                                                <div className="purchases-right-item-title">{elem.title}</div>
                                                <div className="purchases-right-item-grow">{elem.grow}</div>
                                            </div>
                                        </div>
                                        <div className="purchases-right-item-price">${elem.price}</div>
                                    </div>
                                    
                                    <div className={`purchases-right-item-line ${ColorLine[elem.title][1]}`}>
                                        <div className={`purchases-right-item-grow_line ${ColorLine[elem.title][0]}`} style={{width: `${elem.growLine}%`}}></div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
    )
}

export default Purchases