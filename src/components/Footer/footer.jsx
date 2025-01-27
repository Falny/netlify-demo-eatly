import React from 'react'
import './footer.css'

import {ReactComponent as Logo} from '../../images/logo/Logo.svg'
import {ReactComponent as Inst} from '../../images/footer/inst.svg'
import {ReactComponent as In} from '../../images/footer/in.svg'
import {ReactComponent as Facebook} from '../../images/footer/facebook.svg'
import {ReactComponent as Twitter} from '../../images/footer/twitter.svg'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="footer-main">
                        <div className="footer-main_logo-nav">
                            <div className="logo">
                                <Logo className="logo-img footer-img" />
                                <p className="logo-title footer-title">eatly</p>
                            </div>
                            <nav className="footer-main-nav">
                                <ul className="footer-main-nav-list">
                                    <li className="footer-list-item"><a href="#" className='footer-item-link'>Blog</a></li>
                                    <li className="footer-list-item"><a href="#" className='footer-item-link'>Pricing</a></li>
                                    <li className="footer-list-item"><a href="#" className='footer-item-link'>About Us</a></li>
                                    <li className="footer-list-item"><a href="#" className='footer-item-link'>Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="footer_copyright-icons">
                        <div className="footer-copyright">© 2023 EATLY All Rights Reserved.</div>
                        <div className="footer-icons">
                            <div className="footer-icon-inst"><Inst className='inst-icon'/></div>
                            <div className="footer-icons-in"><In className='in-icon'/></div>
                            <div className="footer-icons-facebook"><Facebook className='facebook-icon' /></div>
                            <div className="footer-icons-twitter"><Twitter className='twitter-icon' /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer