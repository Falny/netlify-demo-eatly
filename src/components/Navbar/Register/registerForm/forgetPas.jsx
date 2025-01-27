import React from 'react'
import { NavLink } from 'react-router-dom'
import './signup.css'

import {ReactComponent as Google} from '../../../../images/logo/form/google.svg'
import {ReactComponent as Apple} from '../../../../images/logo/form/apple.svg'
import {ReactComponent as EmailIcon} from '../../../../images/logo/form/email_icon.svg'
import {ReactComponent as ShowPas} from '../../../../images/logo/form/show_pas.svg'


export const ForgetPas = () => {

    const [focusEmail, setFocusEmail] = React.useState(false)

    const [email, setEmail] = React.useState('')

    return (
        <>
            <div className="register-common-form">
                <div className="register-common-form-title">Sign In To eatly</div>
                <p className="register-common-form-mini-title">Enter Your Mail To Reset</p>
                <form action="" className="register-common-form-form">
                    <div className="common-signup-box">
                        <input value={email} onChange={(e) => setEmail(e.target.value)} onFocus={() => setFocusEmail(true)} onBlur={() => email ? setFocusEmail(true) : setFocusEmail(false)} type="email" className={`form-common ${focusEmail || email ? 'input-active' : ''}`} placeholder='EMAIL'/>
                        <EmailIcon className={`common-icon ${email ? 'common-icon-active' : ''}`}/>
                    </div>
                    <button type="submit" className="register-common-form-btn">VERIFY</button>
                </form>
            </div>
        </>
    )
}