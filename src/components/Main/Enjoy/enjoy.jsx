import React from 'react'
import {NavLink} from 'react-router-dom'
import './enjoy.css'

import { ReactComponent as EnjoyStar } from '../../../images/main/enjoy/star.svg'
import { ReactComponent as EnjoyFiveStar } from '../../../images/main/enjoy/five_stars.svg'

import Bg_purple from '../../../images/main/enjoy/bg_static.png'

import MainDish from '../../../images/main/enjoy/main_dish.png'
import MainImgBox from '../../../images/main/enjoy/main_img-box.png'
import {ReactComponent as MainLineGraph} from '../../../images/main/enjoy/main_line-graph.svg'
import {ReactComponent as MainLineBox} from '../../../images/main/enjoy/main_line-box.svg'
import {ReactComponent as MainArrow} from '../../../images/main/enjoy/main_arrow.svg'

import { Graph } from '../graph/graph'

import {motion} from 'framer-motion'


const Enjoy = () => {

    const transition = {duration: 1, type: 'string'}

    return (
        <>
        <div className="container">
            <div className="enjoy">
                <div className="enjoy-left">
                    <p className="enjoy-slat"> <span className="enjoy-slat-line"></span> OVER 1000 USERS</p>
                    <h1 className="enjoy-title">Enjoy Foods All <br/> Over The <span className="title-perple">World</span></h1>
                    <p className="enjoy-text">
                    EatLy help you set saving goals, earn 
                    cash back offers, Go to disclaimer for 
                    more details and get paychecks up to two
                    days early. Get a <span className="enjoy-text-perple">$20 bonus.</span>
                    </p>
                    <div className="enjoy-links">
                        <NavLink to='/price' className="enjoy-link enjoy-link-btn">Get Started</NavLink>
                        <NavLink to='/price' className="enjoy-link enjoy-link-btn-gopro">Go Pro</NavLink>
                    </div>
                    <div className="enjoy-stars">
                        <div className="enjoy-star-box1">
                            <EnjoyStar className='enjoy-star'/>
                            <p className="enjoy-star-text1">Trustpilot</p>
                        </div>
                        <div className="enjoy-star-box2">
                            <EnjoyFiveStar className='enjoy-five-star'/>
                            <p className="enjoy-star-text2">4900+</p>
                        </div>
                    </div>
                </div>
                <motion.div
                    initial={{right: '-5%'}}
                    whileInView={{right: '0'}}
                    transition={transition}
                    className="enjoy-right">
                    <div className="enjoy-right-circle"></div>
                    <div className="enjoy-right-container" >
                        <div className="enjoy-right-container-box" style={{backgroundImage: `url(${MainDish})`}}></div>
                        <MainArrow className='enjoy-right-container-img'/>
                        <MainLineBox className='enjoy-right-box-main-img'/>
                        <div className="enjoy-right-box">
                            <div className="enjoy-right-box-main">
                                <img src={MainImgBox} alt="" className="enjoy-right-box-img" />
                                <div className="enjoy-right-box-text">
                                    <div className="enjoy-right-box__title">Chicken Hell</div>
                                    <div className="enjoy-right-box__mini-title">On The Way</div>
                                </div>
                            </div>
                            <div className="enjoy-right-box__pm">
                                3:09 PM
                            </div>
                        </div>
                        <div className="enjoy-right-graph">
                           <MainLineGraph className="enjoy-right-graph_img" />
                            <div className="enjoy-right-graph-box">
                                <Graph/>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </motion.div>
            </div>
        </div>

        <div className="statistics no-container" style={{backgroundImage: `url(${Bg_purple})` }}>
            <motion.div
                initial={{scale: 1.3}}
                whileInView={{scale: 1}}
                transition={transition}
                className="statist-box statist-box1">
                <p className="statict-title">10K+</p>
                <p className="statist-text">Satisfied Costumers <br/> All Great Over The World </p>
            </motion.div>
            <div className="statist-box statist-box2">
                <p className="statict-title">4M</p>
                <p className="statist-text">Healthy Dishes Sold <br/> Including Milk Shakes Smooth</p>
            </div>
            <motion.div 
                initial={{scale: 1.3}}
                whileInView={{scale: 1}}
                transition={transition}
                className="statist-box statist-box3">
                <p className="statict-title">99.99%</p>
                <p className="statist-text">Reliable Customer Support <br/> We Provide Great Experiences</p>
            </motion.div>
        </div>
    </>
    )
}

export default Enjoy