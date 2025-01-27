import React from 'react'
import { NavLink } from 'react-router-dom'
import './signup.css'

import {ReactComponent as Google} from '../../../../images/logo/form/google.svg'
import {ReactComponent as Apple} from '../../../../images/logo/form/apple.svg'
import {ReactComponent as UserIcon} from '../../../../images/logo/form/user_icon.svg'
import {ReactComponent as EmailIcon} from '../../../../images/logo/form/email_icon.svg'
import {ReactComponent as PasIcon} from '../../../../images/logo/form/pas_icon.svg'
import {ReactComponent as ShowPas} from '../../../../images/logo/form/show_pas.svg'


export const Signup = () => {

    const [focusUser, setFocusUser] = React.useState(false)
    const [focusEmail, setFocusEmail] = React.useState(false)
    const [focusPas, setFocusPas] = React.useState(false)

    const [user, setUser] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [pas, setPas] = React.useState('')

    const [showPas, setShowPas] = React.useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
    }


    return (
        <>
            <div className="register-common-form">
                <div className="register-common-form-title">Sign Up To eatly</div>
                <div className="register-common-form-link">
                    <a href="#" className="register-common-form-link-outside"><Google className='form-icon'/></a>
                    <a href="#" className="register-common-form-link-outside"><Apple className='form-icon'/></a>
                </div>
                <p className="register-common-form-text">OR</p>
                <form action="" className="register-common-form-form" onSubmit={handleSubmit}>
                    <div className="common-signup-box">
                        <input value={user} onChange={(e) => setUser(e.target.value)} onFocus={() => setFocusUser(true)} onBlur={() => user ? setFocusUser(true) : setFocusUser(false)} type="text" className={`form-common ${focusUser || user ? 'input-active' : ''}`} placeholder='FULL NAME'/>
                        <UserIcon className={`common-icon ${focusUser ? 'common-icon-active' : ''}`}/>
                    </div>
                    <div className="common-signup-box">
                        <input value={email} onChange={(e) => setEmail(e.target.value)} onFocus={() => setFocusEmail(true)} onBlur={() => email ? setFocusEmail(true) : setFocusEmail(false)} type="email" className={`form-common ${focusEmail || email ? 'input-active' : ''}`} placeholder='EMAIL'/>
                        <EmailIcon className={`common-icon ${email ? 'common-icon-active' : ''}`}/>
                    </div>
                    <div className="common-signup-box">
                        <input value={pas} onChange={(e) => setPas(e.target.value)} onFocus={() => setFocusPas(true)} onBlur={() => pas ? setFocusPas(true) : setFocusPas(false)} type={showPas ? 'text' : 'password'} className={`form-common ${focusPas || pas ? 'input-active' : ''}`} placeholder='PASSWORD' autoComplete='on'/>
                        <PasIcon className={`common-icon ${pas ? 'common-icon-active' : ''}`}/>
                        <ShowPas onClick={() => setShowPas(e => !e)} className={`show-pass ${pas ? 'common-icon-active' : ''}`}/>
                    </div>
                    <button type="submit" className="register-common-form-btn">SIGN UP</button>
                </form>
                
                <p className="register-common-form-login">Already Have An Account? <NavLink to='/login' className='reg-log'>Log In</NavLink></p>
            </div>
        </>
    )
}