import React from 'react'
import './cart.css'

import { contextCart } from '../../App'
import {MoveLeft, ChevronLeft, ChevronRight, CircleX} from 'lucide-react'
import {Link} from 'react-router-dom'

import {Decimal} from 'decimal.js'

const Cart = () => {

    const {cart, setCart} = React.useContext(contextCart)

    const handleArrowLeft = (_id) => {
        setCart(cart => {
            const lowDish = cart.map((el) => el.id === _id && el.count >= 1 ? {...el, count: el.count-1} : el)

            const deleteDish = lowDish.filter(item => item.count > 0)
            localStorage.setItem('cart', JSON.stringify(deleteDish))
            return deleteDish
        })
    }

    const handleArrowRight = (_id) => {
        setCart(cart => {
            const highDish = cart.map((el) => el.id === _id && el.count >= 1 ? {...el, count: el.count+1} : el)
            localStorage.setItem('cart', JSON.stringify(highDish))
            return highDish
        })
        
    }

    const handleSumbitCart = (e) => {
        e.preventDefault()
    }

    return (
        <>
        <div className="container">
            <div className="cart">
                <div className="cart-back">
                    <Link to='/'>
                        <MoveLeft className='cart-arrow-back'/>
                    </Link>
                </div>
                <form action="" className="cart-form" onSubmit={() => handleSumbitCart()}>
                    {cart.length !== 0 ? (cart.map((elem) => (
                        <ul key={elem.id} className='cart-list'>
                            <li className='cart-item'>
                                <div className="cart-block_name-img">
                                    <img src={elem.img} alt="" className="cart-img" />  
                                    <p className="cart-name">{elem.name}</p>
                                </div>
                                <div className="cart-block-rice-count">
                                    <div className="cart-count-dish">
                                        <div className='cart-arrow cart-arrow-left' onClick={() => handleArrowLeft(elem.id)}>-</div>
                                        <p className="cart-count">{elem.count}</p>
                                        <div className='cart-arrow cart-arrow-right' onClick={() => handleArrowRight(elem.id)}>+</div>
                                    </div>
                                    <p className="cart-price">${Decimal(elem.count * parseFloat(elem.price)).toFixed(2)}</p>
                                </div>
                            </li>
                        </ul>
                    ))) : <div className='cart-empty'>Cart empty</div>}
                    {cart.length > 0 && <div className="cart-all">
                        <div className="cart-common-item cart-all-time">
                            <p className="cart-all-title">Cooking time</p>
                            <p className="cart-all-price">~{cart.reduce((sum, elem) => sum + (elem.time * elem.count), 0)/cart.length}min</p>
                        </div>
                        <div className="cart-common-item cart-all-count">
                            <p className="cart-all-title">Count</p> 
                            <p className="cart-all-price">{cart.reduce((sum, elem) => sum + elem.count, 0)}</p>
                        </div>
                        <div className="cart-common-item cart-all-money">
                            <p className="cart-all-title">Total</p>
                            <p className="cart-all-price">${Decimal(cart.reduce((sum, elem) => sum + (parseFloat(elem.price) * elem.count), 0)).toFixed(2)}</p>
                        </div>
                        <button type='submit' className="cart-order">Review Payment</button>
                    </div>}
                </form>
            </div>
        </div>
        </>
    )
}

export default Cart