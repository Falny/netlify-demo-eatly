import React from 'react'
import './listRestaurants.css'

import {ReactComponent as Star} from '../../../images/main/restaurants/Star.svg'
import {ReactComponent as IsSave} from '../../../images/main/restaurants/is_save.svg'
import {ReactComponent as IsSaveWhite} from '../../../images/main/restaurants/is_save_true.svg'

import {Link} from 'react-router-dom'


const ListRestaurants = (props) => {

    const [isSaveRest, setIsSaveRest] = React.useState(props.restaurants)
    
    const clickSaveRest = (_id) => {
        setIsSaveRest((rest) => {
            return rest.map((elem) => 
                elem.id === _id ? {...elem, isSave: !elem.isSave} : elem
            )
        })

    }

    return (
        <>
            <ul className="restaurants_list">    
                {isSaveRest.map((elem) => (
                    <li key={elem.id} className="restaurants-list-item" >
                        <Link to={`/restaurants/goods/${elem.id}`}>
                            <img src={elem.img} alt="" />
                        </Link>
                        <div className="restaurants-list-item-box">
                            <p className={`status ${props.Status[elem.status]}`}>{elem.status}</p>
                            <p className="restaurants-list-item-title">{elem.name}</p>
                            <div className="box-time_score">
                                <div className="box-time_score">
                                    <p className="time">{elem.time} &middot;</p>
                                    <Star />
                                    <p className="score">{elem.score}</p>
                                </div>
                                <p className="restaurants-list-item-save" onClick={() => {clickSaveRest(elem.id)}}>{elem.isSave ? <IsSave/> : <IsSaveWhite />}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ListRestaurants