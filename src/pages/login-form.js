import React from 'react'

import LoginForm from '../components/login-form'
import Layout from "../components/layout"
import SEO from "../components/seo"

let fields = [
    'First name',
    'Last name',
    'Email'
]
const LoginPage = () => (
    <Layout>
        <SEO title="Login Form Example" />
        <LoginForm
            headline='Enter your personal details'
            fields={ fields }
        />
    </Layout>
)

export default LoginPage
