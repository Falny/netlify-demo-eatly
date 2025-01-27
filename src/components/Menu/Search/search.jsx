import React from 'react'
import './search.css'

import Pizza from '../../../images/menu/search/pizza.png'
import HotDog from '../../../images/menu/search/Hotdog.png'
import Donut from '../../../images/menu/search/Doughnut.png'
import IceCream from '../../../images/menu/search/Icecream.png'

import { Carousel } from '../Menu_carousel/carousel'

import { Search } from 'lucide-react';
import { X } from 'lucide-react';

import {motion} from 'framer-motion'

const category = [
    {id: 1, img: Pizza, title: 'Pizza'},
    {id: 2, img: HotDog, title: 'Asian'},
    {id: 3, img: Donut, title: 'Donut'},
    {id: 4, img: IceCream, title: 'Ice'},
]

const price = [0, 25, 50, 100, 500, 1000]

const sortBy = ['Recomended', 'Most Popular', 'Fast Delivery']

export const SearchMenu = (props) => {

    const StatusColor = {
        'Pizza': ['yellow_category', 'yellow_category-active'],
        'Asian': ['red_category', 'red_category-active'],
        'Donut': ['brown_category', 'brown_category-active'], 
        'Ice': ['blue_category', 'blue_category-active'], 
    }

    const transition = {duration: 2, type: 'spring'}

    const [value, setValue] = React.useState('')
    const [menuBtn, setMenuBtn] = React.useState(null)
    const [menuStatus, setMenuStatus] = React.useState(null)
    const [sortByLink, setSortByLink] = React.useState(null);

    const widthPriceRef = React.useRef() // длина для прайса
    const [widthPriceBlock, setWidthPriceBlock] = React.useState(0)

    const widthCirclePriceRef = React.useRef() //для круга на прайсе которую будет двигать пользователь
    const [widthCircle, setWidthCircle] = React.useState()

    const [isMoving, setIsMoving] = React.useState(false) // все ниже для ползунка и длины
    const startX = React.useRef(0)
    const startScrollLeft = React.useRef(0)
    const [circlePosition, setCirclePosition] = React.useState(0)
    const [priceOfSearch, setPriceOfSearch] = React.useState(0);


    React.useEffect(() => {
        const widthPrice = () => {
            if (widthPriceRef.current) {
                setWidthPriceBlock(widthPriceRef.current.offsetWidth)
            }
        }

        const widthCircle = () => {
            if (widthCirclePriceRef.current) {
                setWidthCircle(widthCirclePriceRef.current.offsetWidth)
            }
        }

        widthPrice()
        widthCircle()
        window.addEventListener('resize', widthPrice)
        window.addEventListener('resize', widthCircle)
    }, [])

    let coordLeft = widthPriceRef.current ? widthPriceRef.current.offsetLeft : 0 //координаты для длина блока с ценой
    let coordRight = coordLeft + widthPriceBlock

    const cursorStart = (e) => {
        setIsMoving(true)
        startX.current = e.pageX
        startScrollLeft.current = circlePosition
    }

    const startMoving = (e) => {
        if (!isMoving) return 

        if (e.pageX > coordLeft && e.pageX < coordRight) {
            const newPositionCircle = startScrollLeft.current + (e.pageX - startX.current)
            let price = 0
            if (priceOfSearch < 0) {
                price = 0
            } else if (priceOfSearch > 1000) {
                price = 1000
            } else{
                price = (newPositionCircle / (coordRight - coordLeft) * 1000).toFixed(0)
            }
            
            setPriceOfSearch(price)
            setCirclePosition(newPositionCircle)
        }
    }

    const cursorEnd = () => {
        setIsMoving(!isMoving)
    }

    const handleSearch = () => {
        props.handleFilterChange({search: value, dish_or_rest: menuBtn})
        setValue('');
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    const handleSearcBtn = (btn) => {
        setMenuBtn(btn);
        props.handleFilterChange({search: value, dish_or_rest: btn})
    }

    const handleCategory = (e) => {
        setMenuStatus(e)
    }

    const handleSortBy = (e) => {
        setSortByLink(e)
    }

    const handleFilterCategoryAndSortBy = () => {
        
        if (menuStatus || sortByLink || priceOfSearch) {
            props.handleFilterBox({category: menuStatus, sortby: sortByLink, price: priceOfSearch})
        } 

        setMenuStatus('');
        setSortByLink('');
        setPriceOfSearch(0);
    }

    const handleClearSearch = () => {
        setValue('');
        setMenuBtn('')
        props.handleFilterChange({search: ''})
    }

    return (
        <>
            <div className="menu-weekend">
                <div className="menu-weekend-left">
                    <Carousel />
                    <div className="menu-weekend_search-sort">
                        <div className="menu-weekend-search">
                            <Search className='search_icon' />
                            <input onKeyDown={handleKeyDown} value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder='Search' />
                            <X className='clear_icon' onClick={() => handleClearSearch()}/>
                        </div>
                        <div className="menu-weekend-sort">
                            <button onKeyDown={handleKeyDown} onClick={() => handleSearcBtn('food')} className={`${menuBtn === 'food' ? 'active' : ''}`}>Food</button>
                            <button onKeyDown={handleKeyDown} onClick={() => handleSearcBtn('restaurants')} className={`${menuBtn === 'restaurants' ? 'active' : ''}`}>Restaurants</button>
                        </div>
                    </div>
                </div>
                <motion.div 
                    initial={{x: '10%'}}
                    whileInView={{x: '0%'}}
                    transition={transition}
                    className="menu-weekend-right">
                    <div className="menu-weekend-right-box" >
                        <div className="menu-weekend-right-select">
                            <div className="menu-weekend-title">Category</div>
                            <div className="menu-weekend-food">
                                {category.map((elem) => (
                                    <div key={elem.id} onClick={() => handleCategory(`${elem.title}`)} className={`menu-weekend-food-status ${StatusColor[elem.title][0]} ${menuStatus===elem.title ? StatusColor[elem.title][1] : ''}`}>
                                        <img src={elem.img} className="menu-weekend-img" />
                                        <p className="menu-weekend-img">{elem.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="menu-weekend-right-select">
                            <div className="menu-weekend-title">Sort By</div>
                            <div className="menu-sortby-box">
                                {sortBy.map((elem, index) => (
                                    <p key={index} onClick={() => handleSortBy(`${elem}`)} className={`menu-weekend-sortby ${sortByLink === elem ? 'menu-weekend-sortby-active': ''}`}>{elem}</p>
                                ))}
                            </div>
                        </div>
                        
                        <div className="menu-weekend-right-select">
                            <div className="menu-weekend-title menu-weekend-title_price">Price <input className="menu-weekend-under-price" onChange={(e) => setPriceOfSearch(e.target.value)} value={priceOfSearch}/></div>
                            
                            <div className="menu-weekend-ratio" ref={widthPriceRef} onMouseMove={startMoving}>
                                <div className="menu-weekend-ratio-circle" 
                                ref={widthCirclePriceRef}
                                onMouseDown={cursorStart}
                                onMouseUp={cursorEnd}
                                style={{left: `${circlePosition}px`}}
                                ></div>  {/* кружок для перемещения диапозона цены*/}
                            </div>
                            <div className="menu-weekend-price">
                                {price.map((elem, index) => (
                                    <p key={index} className="menu-weekend-price-item">${elem}</p>
                                ))}
                            </div>
                            
                        </div>
                        
                        <button onClick={handleFilterCategoryAndSortBy} className="menu-weekend-right-btn">Apply</button>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

// onClick={() => alert('Хорошо, если вы сюда нажали, то знайте, я запуталась в сортировке, и у меня не получилось настроить, если вы могли бы помочь и объяснить, то было бы очень круто, а остальная сортировка работает')}