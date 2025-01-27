import React from 'react'

import { Signup } from '../Navbar/Register/registerForm/signup';
import { LogIn } from '../Navbar/Register/registerForm/login';
import { ForgetPas } from '../Navbar/Register/registerForm/forgetPas';

const Register = ({type}) => {
    switch (type) {
        case 'signup':
            return <Signup />
        case 'login' :
            return <LogIn />
        case 'forgetpas':
            return <ForgetPas />
    }
}

export default Register