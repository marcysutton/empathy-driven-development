import React, { Component } from 'react'
import AnnounceDocTitle from 'react-announce-doc-title'

import LoginForm from '../components/login-form'

class LoginFormDemo extends Component {
    render() {
        let fields = [
            'First name',
            'Last name',
            'Email'
        ]
        return (
            <AnnounceDocTitle title='Login Form - Component Library'>
                <LoginForm
                    headline='Enter your personal details'
                    fields={ fields }
                />
            </AnnounceDocTitle>
        )
    }
}

export default LoginFormDemo
