import React, { Component } from 'react'

import LoginForm from '../components/login-form'

class LoginFormDemo extends Component {
    render() {
        let fields = [
            'First name',
            'Last name',
            'Email'
        ]
        return (
            <LoginForm
                headline='Enter your personal details'
                fields={ fields }
            />
        )
    }
}

export default LoginFormDemo
