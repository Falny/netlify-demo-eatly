import React, {lazy} from 'react'

import { SearchMenu } from '../Search/search'
import { RestaurantsDishes } from '../Restaurants/restaurants'

const InsideRest = lazy(() => import('../Inside_restaurants/insideRest'))
const ListRestaurants = lazy(() => import('../../Common/LisrRestaurants/listRestaurants'))

const SortByMenu = (props) => {
    const [filter, setFilter] = React.useState({
        search: '',
        dish_or_rest: '',
    })

    const [filterbox, setFilterBox] = React.useState({
        category: '',
        sortby: '',
        price: 0,
    })

    const handleFilterChange = (new_filter) => {
        setFilter((new_filter))
    }

    const handleFilterBox = (new_filter) => {
        setFilterBox(new_filter)
    }

    const filterRestAndDish = () => {
        const filterSearch = filter.search ? filter.search.toLowerCase() : ''

        const fileredRestaurants = props.restaurants.filter((elem) => {
           return (elem.name.toLowerCase().includes(filterSearch))
        })

        const filterDish = props.restaurants.flatMap(elem => elem.goods).filter((dish) => {
            return (dish.name.toLowerCase().includes(filterSearch))
        })

        return {fileredRestaurants, filterDish}
    }

    const filterCategoryEG = () => {
        const filteredDishes = props.restaurants.flatMap(elem => elem.goods).filter((elem) => {
            const categ = filterbox.category ? elem.category.includes(filterbox.category.toLowerCase()) : ''
            const sortLink = filterbox.sortby ? 
            Array.isArray(elem.sortby) ? elem.sortby.some(el => elem.sortby.includes(filterbox.sortby)) : elem.sortby === filterbox.sortby
            : '';
            const priceSort = filterbox.price ? parseInt(elem.price) <= parseInt(filterbox.price) : 0;
            
            return categ || sortLink ||  priceSort
        })

        return filteredDishes
    }

    const {fileredRestaurants, filterDish} = filterRestAndDish()

    const filteredDishBlock = filterCategoryEG()

    
    return (
        <>
            <SearchMenu handleFilterChange={handleFilterChange} handleFilterBox={handleFilterBox}/>
            {
                filter.dish_or_rest && filter.search ? (
                    filter.dish_or_rest === 'food' ? (
                        <>
                            <InsideRest Status={props.Status} restaurants={filterDish} />
                        </>
                    ) : (
                        <>
                            <ListRestaurants filter={filter} Status={props.Status} restaurants={fileredRestaurants} />
                        </>
                        )
                    )
                : filter.dish_or_rest ? (
                    filter.dish_or_rest === 'food' ? (
                        <InsideRest Status={props.Status} restaurants={props.restaurants.flatMap((rest) => rest.goods)} />
                    ) : (
                        <ListRestaurants Status={props.Status} restaurants={props.restaurants} />
                    )
                ) : filter.search ? (
                    <>
                        <ListRestaurants filter={filter} Status={props.Status} restaurants={fileredRestaurants} />
                        <InsideRest Status={props.Status} restaurants={filterDish} />
                    </>
                ) : filterbox.category ? (
                    <InsideRest Status={props.Status} restaurants={filteredDishBlock}/>
                ) : (
                    <RestaurantsDishes Status={props.Status} restaurants={props.restaurants} />
                )
            }
        </>
    )
}

export default SortByMenu