import React from 'react'
import './articles.css'

import { MoveLeft } from 'lucide-react';
import { MoveRight } from 'lucide-react';

import {Link} from 'react-router-dom'

const Articles = (props) => {

    const article = React.useRef(null);
    const [articleHeight, setArticleHeight] = React.useState(0);


    const [currentPage, setCurrentPage] = React.useState(0)
    const [displayPage, setDisplayPage] = React.useState(getWidthArticle());

    const startIndex = currentPage * displayPage;
    const endIndex = startIndex + displayPage;
    const newArticle = props.articles.slice(startIndex, endIndex)


    React.useEffect(() => {
        const articleHeight = () => {
            if (article.current) {
                setArticleHeight(article.current.offsetHeight)
            }
        }
        articleHeight()
        window.addEventListener('resize', articleHeight)
    }, [])

    function getWidthArticle() {
        const width = window.innerWidth;
        if (width < 768) {
            return 2;
        } else if (width < 1100) {
            return 4;
        } else {
            return 6;
        }
    }

    const handlePlusArticle = () => {
        if (endIndex < props.articles.length){
            setCurrentPage(page => (page+1))
        }
    }

    const handleMinusArticle = () => {
        if (currentPage > 0){
            setCurrentPage(page => (page-1))
        }
    }

    return (
        <>
            <div className="articles">
                <h2 className="title blog-title">Latest <span className="title-perple">Articles</span></h2>
                <ul className="articles-list" style={{minHeight: displayPage < 768 ? articleHeight : `${articleHeight * 2}px`}}>
                    {newArticle.map((elem) => (
                        <li key={elem.id} className="articles-list-item" ref={article}>
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
                <div className="articles-arrows">
                    <MoveLeft onClick={() => handleMinusArticle()} className='arrow articles-left'/>
                    <MoveRight onClick={() => handlePlusArticle()} className='arrow articles-right'/>
                </div>
            </div>
        </>
    )
}

export default Articles