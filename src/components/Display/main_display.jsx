import React, {lazy} from 'react'

import { Customer } from '../Main/Castomer/customer';

const Subscribe = lazy(() => import('../Main/Subscribe/subscribe'))
const Purchases = lazy(() => import('../Main/Purchases/purchases'))
const Quality = lazy(() => import('../Main/Quality/quality'))
const Enjoy = lazy(() => import('../Main/Enjoy/enjoy'))

const Display_main = (props) => {

    const Status = {
        Healthy: 'healthy',
        Trending: 'trending',
        Supreme: 'supreme'
    }

    return (
        <>
            <Enjoy />
            <div className="container">
                <Quality Status={Status} restaurants={props.restaurants}/>
                <Purchases />
                <Customer />
                <Subscribe />
            </div>
             
        </>
    )
}

export default Display_main