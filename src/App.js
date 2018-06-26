import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import './App.css'

import {AnimationContext} from './animation-context'

import LoginFormDemo from './pages/login-form-demo'
import CardFlipDemo from './pages/card-flip-demo'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
        animationEnabled: true
    }
  }

  handleAnimationPref() {
    this.setState({
      animationEnabled: !this.state.animationEnabled
    })
  }

  render() {
    return (
      <AnimationContext.Provider value={this.state.animationEnabled ? 'animationsOn' : ''}>
        <Router>
          <div className="App">
            <header className="App-header" role="banner">
              <h1 className="App-title">
                <NavLink to="/">Component Library</NavLink>
              </h1>
              <ul className="Component-list">
                <li><NavLink 
                    to="/login-form"
                    >Login Form</NavLink> <span></span></li>
                  <li><NavLink 
                    to="/card-flip"
                    >Card Flip</NavLink> <span></span></li>
              </ul>
              <button
                className="Animation-pref"
                onClick={this.handleAnimationPref.bind(this)}>
                Turn {this.state.animationEnabled ? 'off' : 'on'} animations<br />
              </button>
            </header>
            <main className="main" role="main">
              <Route path="/login-form" component={LoginFormDemo}/>
              <Route path="/card-flip" component={CardFlipDemo}/>
            </main>
          </div>
        </Router>
      </AnimationContext.Provider>
    )
  }
}

export default App
