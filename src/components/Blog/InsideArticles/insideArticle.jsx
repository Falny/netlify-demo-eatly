import React from 'react'
import './insideArticle.css'

import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import ArrowBtn from '../../../images/main/quality/quality-download.png'

const InsideArticle = (props) => {

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)


    const {id} = useParams()
    const findArticle = props.articles.find(el => el.id === id)

    const randomArticleFunc = (article, count) => {
        const rand = article.sort(() => 0.5 - Math.random())
        return rand.slice(0, count)
    }

    const randomArticle = randomArticleFunc(props.articles, 3)
    const OneRandomArticle = randomArticleFunc(props.articles, 1)

    const handleScrollUp = () => {
        window.scrollTo({left: 0, top: 0, behavior: 'smooth'})
    }
    
    return (
        <>
        <div className="container">
            <div className="inside-article">
                <div className="inside-article-head">
                    <h3 className="inside-article-title">{findArticle.title}</h3>
                    <div className="inside-articles-item-left">
                        <img src={findArticle.img} alt="" className="inside-articles-item-icon" />
                        <div className="inside-articles-item-name">
                            <p className="inside-articles-item-writter">Written By</p>
                            <p className="inside-articles-item-nick">{findArticle.name}</p>
                        </div>
                    </div>
                </div>
                <img src={findArticle.mainImg} alt="" className="inside-article-main-img" />
                <div className="inside-article-box">
                    <div className="inside-article-article">{findArticle.article}</div>
                    <div className="inside-article-random-artical">
                        <ul className="inside-article-list" onClick={handleScrollUp}>
                            {windowWidth-200 > 480 ? randomArticle.map((elem) => (
                                <li key={elem.id} className="articles-list-item">
                                    <Link to={`/blog/article/${elem.id}`}>
                                        <img src={elem.mainImg} alt="" className="articles-item-img" />
                                    </Link>
                                    <h3 className="articles-item-title">{elem.title}</h3>
                                    <div className="articles-item-box">
                                        <div className="articles-item-left">
                                            <img src={elem.img} alt="" className="articles-item-icon" />
                                            <div className="articles-item-name">
                                                <p className="articles-item-writter">Written By</p>
                                                <p className="articles-item-nick">{elem.name}</p>
                                            </div>
                                        </div>
                                        <p className="articles-item-data">{elem.data}</p>
                                    </div>
                                </li>
                            )) : OneRandomArticle.map((elem) => (
                                <li key={elem.id} className="articles-list-item">
                                    <Link to={`/blog/article/${elem.id}`}>
                                        <img src={elem.mainImg} alt="" className="articles-item-img" />
                                    </Link>
                                    <h3 className="articles-item-title">{elem.title}</h3>
                                    <div className="articles-item-box">
                                        <div className="articles-item-left">
                                            <img src={elem.img} alt="" className="articles-item-icon" />
                                            <div className="articles-item-name">
                                                <p className="articles-item-writter">Written By</p>
                                                <p className="articles-item-nick">{elem.name}</p>
                                            </div>
                                        </div>
                                        <p className="articles-item-data">{elem.data}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Link onClick={handleScrollUp} to={`/blog/article/${OneRandomArticle[0].id}`} className='inside-article-btn-box'>
                    <p className="inside-article-btn">Next Article</p>
                    <img src={ArrowBtn} alt="" className='inside-article-arrow'/>
                </Link>
            </div>
        </div>
        </>
    )
}

export default InsideArticle