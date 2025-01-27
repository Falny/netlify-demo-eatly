import React, {lazy} from 'react'
import {Outlet} from 'react-router-dom'

const Navbar = lazy(() => import('./Navbar/navbar'))
const Footer = lazy(() => import('./Footer/footer'))

const Loyaut = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            
            <Outlet />
            
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Loyaut