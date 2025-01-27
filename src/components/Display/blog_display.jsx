import React, {lazy} from 'react'

const Subscribe = lazy(() => import('../Main/Subscribe/subscribe'))
const Questions = lazy(() => import('../Menu/Questions/questions'))
const Articles = lazy(() => import('../Blog/Articles/articles'))

const Display_blog = (props) => {
    return (
        <>
            <div className="container">
                <Subscribe />
                <Articles articles={props.articles}/>
                <Questions />
            </div>
        </>
    )
}

export default Display_blog