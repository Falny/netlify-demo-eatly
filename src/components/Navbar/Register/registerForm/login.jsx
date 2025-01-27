import React from 'react'
import { NavLink } from 'react-router-dom'
import './signup.css'

import {ReactComponent as Google} from '../../../../images/logo/form/google.svg'
import {ReactComponent as Apple} from '../../../../images/logo/form/apple.svg'
import {ReactComponent as EmailIcon} from '../../../../images/logo/form/email_icon.svg'
import {ReactComponent as PasIcon} from '../../../../images/logo/form/pas_icon.svg'
import {ReactComponent as ShowPas} from '../../../../images/logo/form/show_pas.svg'


export const LogIn = () => {

    const [focusEmail, setFocusEmail] = React.useState(false)
    const [focusPas, setFocusPas] = React.useState(false)

    const [email, setEmail] = React.useState('')
    const [pas, setPas] = React.useState('')

    const [showPas, setShowPas] = React.useState(false)


    return (
        <>
            <div className="register-common-form">
                <div className="register-common-form-title">Sign In To eatly</div>
                <div className="register-common-form-link">
                    <a href="#" className="register-common-form-link-outside"><Google /></a>
                    <a href="#" className="register-common-form-link-outside"><Apple /></a>
                </div>
                <p className="register-common-form-text">OR</p>
                    <form action="" className="register-common-form-form">
                        <div className="common-signup-box">
                            <input value={email} onChange={(e) => setEmail(e.target.value)} onFocus={() => setFocusEmail(true)} onBlur={() => email ? setFocusEmail(true) : setFocusEmail(false)} type="email" className={`form-common ${focusEmail || email ? 'input-active' : ''}`} placeholder='EMAIL'/>
                            <EmailIcon className={`common-icon ${email ? 'common-icon-active' : ''}`}/>
                        </div>
                        <div className="common-signup-box">
                            <input value={pas} onChange={(e) => setPas(e.target.value)} onFocus={() => setFocusPas(true)} onBlur={() => pas ? setFocusPas(true) : setFocusPas(false)} type={showPas ? 'text' : 'password'} className={`form-common ${focusPas || pas ? 'input-active' : ''}`} placeholder='PASSWORD'/>
                            <PasIcon className={`common-icon ${pas ? 'common-icon-active' : ''}`}/>
                            <ShowPas onClick={() => setShowPas(e => !e)} className={`show-pass ${pas ? 'common-icon-active' : ''}`}/>
                        </div>
                        <NavLink to='/forgetpas' className="forget-password">Forget Password ?</NavLink>
                        <button type="submit" className="register-common-form-btn">SIGN IN</button>
                    </form>
                <p className="register-common-form-login">Create A New Account? <NavLink to='/signup' className='reg-log'>Sign Up</NavLink></p>
            </div>
        </>
    )
}