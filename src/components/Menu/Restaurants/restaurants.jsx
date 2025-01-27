import React, {lazy} from 'react'
import './restaurants.css'

import {Link} from 'react-router-dom'

const InsideRest = lazy(() => import('../Inside_restaurants/insideRest'))
const ListRestaurants = lazy(() => import('../../Common/LisrRestaurants/listRestaurants'))

export const RestaurantsDishes = (props) => {

    const randomDishes = (dish, count) => {
        const rand = dish.sort(() => 0.5 - Math.random())
        return rand.slice(0, count)
    }

    const dish = props.restaurants.flatMap(rest => rest.goods)
    const getRand = randomDishes(dish, 5)

    return (
        <>
            <div className="menu_rest">
                <div className="menu_rest-box">
                    <h3 className="title menu_rest-title">Our Top <span className="title-perple">Restaurants</span></h3>
                    <Link to='/restaurants' className="view-all menu_rest-view">View All <span className="view-all_arrow">&rarr;</span></Link>
                </div>
                <div className="menu-list">
                    <ListRestaurants Status={props.Status} restaurants={props.restaurants.slice(0, 3)}/>
                </div>
            </div>

            <div className="menu_rest">
                <div className="menu_rest-box">
                    <h3 className="title menu_rest-title">Our Top <span className="title-perple">Dishes</span></h3>
                </div>
                <div className="menu-list">
                    <InsideRest Status={props.Status} restaurants={getRand}/>
                </div>
                
            </div>
        </>
    )
}