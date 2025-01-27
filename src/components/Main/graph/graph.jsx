import React from 'react'
import './graph.css'

import Main2D from '../../../images/main/graph/main/main-2d.png'
import Main4D from '../../../images/main/graph/main/main-4d.png'
import Main5D from '../../../images/main/graph/main/main-5d.png'
import Main6D from '../../../images/main/graph/main/main-6d.png'
import Main7D from '../../../images/main/graph/main/main-7d.png'

import Weekly2D from '../../../images/main/graph/weekly/weekly-2d.png'
import Weekly4D from '../../../images/main/graph/weekly/weerly-4d.png'
import Weekly5D from '../../../images/main/graph/weekly/weerly-5d.png'
import Weekly6D from '../../../images/main/graph/weekly/weekly-6d.png'
import Weekly7D from '../../../images/main/graph/weekly/weekly-7d.png'

export const Graph = () => {

    const [titleImg, setTitleImg] = React.useState('main')
    const [days, setDays] = React.useState('2d')

    const [activeImg, setActiveImg] = React.useState('main')
    const [activeDays, setActiveDays] = React.useState('2d')

    const clickChangeImg = (current) => {
        setTitleImg(current)
        setActiveImg(current)
    }

    const clickChangeImgDays = (current) => {
        setDays(current)
        setActiveDays(current)
    }

    return (
        <div className="box">
            <div className="box-header">
                <ul className="box-header-title">
                    <li onClick={() => clickChangeImg('main')} className={`box-header-title-item ${activeImg==='main' && 'active'}`}>Main</li>
                    <li onClick={() => clickChangeImg('weekly')} className={`box-header-title-item ${activeImg==='weekly' && 'active'}`}>Weekly</li>
                    <li onClick={() => clickChangeImg('montly')} className={`box-header-title-item ${activeImg==='montly' && 'active'}`}>Montly</li>
                    <li onClick={() => clickChangeImg('yarly')} className={`box-header-title-item ${activeImg==='yarly' && 'active'}`}>Yarly</li>
                </ul>
                <div className="box-img-graph">
                    {titleImg === 'main' && days === '2d' && <img src={Main2D} className='img-graph'/>}
                    {titleImg === 'main' && days === '4d' && <img src={Main4D} className='img-graph'/>}
                    {titleImg === 'main' && days === '5d' && <img src={Main5D} className='img-graph'/>}
                    {titleImg === 'main' && days === '6d' && <img src={Main6D} className='img-graph'/>}
                    {titleImg === 'main' && days === '7d' && <img src={Main7D} className='img-graph'/>}

                    {titleImg === 'weekly' && days === '2d' && <img src={Weekly2D} className='img-graph'/>}
                    {titleImg === 'weekly' && days === '4d' && <img src={Weekly4D} className='img-graph'/>}
                    {titleImg === 'weekly' && days === '5d' && <img src={Weekly5D} className='img-graph'/>}
                    {titleImg === 'weekly' && days === '6d' && <img src={Weekly6D} className='img-graph'/>}
                    {titleImg === 'weekly' && days === '7d' && <img src={Weekly7D} className='img-graph'/>}

                    {titleImg === 'montly' && days === '2d' && <img src={Main2D} className='img-graph'/>}
                    {titleImg === 'montly' && days === '4d' && <img src={Main4D} className='img-graph'/>}
                    {titleImg === 'montly' && days === '5d' && <img src={Main5D} className='img-graph'/>}
                    {titleImg === 'montly' && days === '6d' && <img src={Main6D} className='img-graph'/>}
                    {titleImg === 'montly' && days === '7d' && <img src={Main7D} className='img-graph'/>}

                    {titleImg === 'yarly' && days === '2d' && <img src={Weekly2D} className='img-graph'/>}
                    {titleImg === 'yarly' && days === '4d' && <img src={Weekly4D} className='img-graph'/>}
                    {titleImg === 'yarly' && days === '5d' && <img src={Weekly5D} className='img-graph'/>}
                    {titleImg === 'yarly' && days === '6d' && <img src={Weekly6D} className='img-graph'/>}
                    {titleImg === 'yarly' && days === '7d' && <img src={Weekly7D} className='img-graph'/>}

                </div>
                <ul className="box-footer-days">
                    <li onClick={() => clickChangeImgDays('2d')} className={`box-footer-days-item ${activeDays==='2d' && 'active'}`}>2D</li>
                    <li onClick={() => clickChangeImgDays('4d')} className={`box-footer-days-item ${activeDays==='4d' && 'active'}`}>4D</li>
                    <li onClick={() => clickChangeImgDays('5d')} className={`box-footer-days-item ${activeDays==='5d' && 'active'}`}>5D</li>
                    <li onClick={() => clickChangeImgDays('6d')} className={`box-footer-days-item ${activeDays==='6d' && 'active'}`}>6D</li>
                    <li onClick={() => clickChangeImgDays('7d')} className={`box-footer-days-item ${activeDays==='7d' && 'active'}`}>7D</li>
                </ul>
            </div>
        </div>
    )
}