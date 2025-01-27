import React, {lazy} from 'react'

const Questions = lazy(() => import('../Menu/Questions/questions'))
const SortByMenu = lazy(() => import('../Menu/Sort/menuSort'))

const Display_menu = (props) => {

    const Status = {
        Healthy: 'healthy',
        Trending: 'trending',
        Supreme: 'supreme'
    }

    return (
        <>
            <div className="container">
                <SortByMenu Status={Status} restaurants={props.restaurants}/>
                <Questions />
            </div>
            
        </>
    )
}

export default Display_menu