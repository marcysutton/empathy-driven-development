import React, { Component } from 'react'

class LoginForm extends Component {
    render() {
        let fields = this.props.fields.map((name, index) => {
            return <div className="form-group" key={ index }>
                <input type="text" placeholder={name} />
            </div>
        });
        return (
            <form className="login-form">
                <h2>{ this.props.headline }</h2>
                { fields }
                <div className="form-group">
                    <input type="submit" />
                </div>
            </form>
        )
    }
}

export default LoginForm