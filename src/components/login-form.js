import React, { Component } from 'react'

class LoginForm extends Component {
    render() {
        let fields = this.props.fields.map((name, index) => {
            return <div className="form-group" key={ index }>
                <label>
                    { name }
                    <input type="text" />
                </label>
            </div>
        });
        return (
            <form className="login-form">
                <fieldset>
                    <legend><h2>{ this.props.headline }</h2></legend>
                    { fields }
                    <div className="form-group">
                        <input type="submit" />
                    </div>
                </fieldset>
            </form>
        )
    }
}

export default LoginForm