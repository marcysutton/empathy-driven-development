import React, { Component } from 'react'

class LoginForm extends Component {
  render() {
    return (
        <form className="login-form">
            <h2>Enter your personal details</h2>
            <div className="form-group">
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last name" />
            </div>
            <div className="form-group">
                <input type="text" placeholder="Email" />
            </div>
            <div className="form-group">
                <input type="submit" />
            </div>
        </form>
    )
  }
}

export default LoginForm
