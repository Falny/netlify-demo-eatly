import React from 'react'
import './insideRest.css'

import {ReactComponent as Star} from '../../../images/main/restaurants/Star.svg'
import {ReactComponent as Like} from '../../../images/main/dishes/like.svg'
import {ReactComponent as LikeRed} from '../../../images/main/dishes/like_red.svg'

import {useParams} from 'react-router-dom'

import { contextCart } from '../../../App'

const InsideRest = (props) => {

    const { id } = useParams();
    const goods = props.restaurants.find(rest => rest.id === id)
    const [dish, setDish] = React.useState(goods ? goods.goods : props.restaurants)

    const {cart, setCart} = React.useContext(contextCart)
    
    const [success, setSuccess] = React.useState(false);

    const clickLikeDish = (_id) =>{
        setDish((catal) => {
            return catal.map((elem) => 
                elem.id === _id ? {...elem, isLike: !elem.isLike} : elem
            )
        })
    }

    const clickAddCart = (current) => {
        const index = cart.findIndex(val => val.id === current.id)

        if (index !== -1) {
            setCart((cart) => {
                const newCart = [...cart];
                newCart[index] = {...newCart[index], count: newCart[index].count+1}
                return newCart
            })
        } else {
            setCart(cart => {
                const newCart = [...cart, {id: current.id, name: current.name, img: current.img, time: parseInt(current.time.slice(0, 2)), price: current.price, count: current.count+1}]
                localStorage.setItem('cart', JSON.stringify(newCart))
                return newCart
            })
        }
        setSuccess(true)

        const timer = setTimeout(() => {
            setSuccess(false)
        }, 2000)
        return timer
        
    }

    return (
        <>
            <div className="inside-restaurant">
                <h2 className="restaurants-name">{props.restaurants.name}</h2>
                <ul className="inside-restaurant-list">
                    {dish.map((dish) => (
                        <li key={dish.id} className="dishes-list-item">
                            <p className="dishes-item-like" onClick={() => clickLikeDish(dish.id)}>{dish.isLike ? <LikeRed /> : <Like />}</p>
                            <img src={dish.img} alt="" className="dishes-item-img" />
                            <p className={`status ${props.Status[dish.status]}`}>{dish.status}</p>
                            <p className="dishes-item-name">{dish.name}</p>
                            <div className="box-time_score">
                                <p className="time">{dish.time} &middot;</p>
                                <Star />
                                <p className="score">{dish.score}</p>
                            </div>
                            
                            <div className="dishes-item-below">
                                <div className="dishes-item-price">
                                    <p className="dishes-item-price1">${dish.price.split('.')[0]}</p>
                                    <p className="dishes-item-price2">.{dish.price.split('.')[1]}</p>
                                </div>
                                
                                <button className="dishes-item-add" onClick={() => clickAddCart(dish)}>+</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {success && <div className={`success-add ${success ? 'success-add-active' : ''}`}>Добавлено в корзину!</div>}
        </>
    )
}

export default InsideRest