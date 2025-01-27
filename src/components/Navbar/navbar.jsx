import React from 'react'
import './navbar.css'

import {ReactComponent as Logo} from '../../images/logo/Logo.svg'

import { NavLink } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react';

const setClass = ({isActive}) => isActive ? 'isActive' : ''

const Navbar = () => {

    const [burger, setBurger] = React.useState(false);
    
    React.useEffect(() => {
        if (burger) {
            document.body.style.overflow = 'hidden';
        } else{
            document.body.style.overflow = 'scroll';
        }
    }, [burger])


    return (
        <>
            {burger && (
                    <div className="burger-menu">
                        <ul className="nav-list burger-list">
                            <li className="nav-list-item"><NavLink to='/menu' onClick={() => setBurger(false)} className={`nav-list-item-link nav-list-item-link-burger ${setClass}`}>Menu </NavLink></li>
                            <li className="nav-list-item"><NavLink to='/blog' onClick={() => setBurger(false)} className={`nav-list-item-link nav-list-item-link-burger ${setClass}`}>Blog </NavLink></li>
                            <li className="nav-list-item"><NavLink to='/price' onClick={() => setBurger(false)} className={`nav-list-item-link nav-list-item-link-burger ${setClass}`}>Pricing </NavLink></li>
                            <li className="nav-list-item"><NavLink to='/contact' onClick={() => setBurger(false)} className={`nav-list-item-link nav-list-item-link-burger ${setClass}`}>Contact </NavLink></li>
                        </ul>
                    </div>
                )}

                <div className="burger-open">
                    <input type="checkbox" id='menu-toggle' className="burger-toggle" />
                    <label htmlFor="menu-toggle" className="burger-btn" onClick={() => setBurger(b => !b)}>
                        <span className="burger-item"></span>
                        <span className="burger-item"></span>
                        <span className="burger-item"></span>
                    </label>
                </div>

            <div className="container">
                <div className="navbar">
                    <div className="navbar-box">
                        <NavLink to='/' className='logo'>    
                            <div className="logo">
                                <Logo className="logo-img" />
                                <p className="logo-title">eatly</p>
                                </div>
                        </NavLink>    
                        
                        <nav className="navigate-list">
                            <ul className="nav-list">
                                <li className="nav-list-item"><NavLink to='/menu' className={`nav-list-item-link ${setClass}`}>Menu </NavLink></li>
                                <li className="nav-list-item"><NavLink to='/blog' className={`nav-list-item-link ${setClass}`}>Blog </NavLink></li>
                                <li className="nav-list-item"><NavLink to='/price' className={`nav-list-item-link ${setClass}`}>Pricing </NavLink></li>
                                <li className="nav-list-item"><NavLink to='/contact' className={`nav-list-item-link ${setClass}`}>Contact </NavLink></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="login-signtup">
                        <NavLink to='/cart'><ShoppingCart className='cart-icon'/></NavLink>
                        <NavLink to='/login'className="nav-link-login nav-login">Login</NavLink>
                        <NavLink to="/signup" className="nav-link-login nav-signup">Sign Up</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar