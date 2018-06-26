import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import './App.css'

import LoginFormDemo from './pages/login-form-demo'
import CardFlipDemo from './pages/card-flip-demo'
import MenuDemo from './pages/menu-demo'

class App extends Component {
  render() {
    return (
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
          </header>
          <main className="main" role="main">
            <Route path="/login-form" component={LoginFormDemo}/>
            <Route path="/card-flip" component={CardFlipDemo}/>
          </main>
        </div>
      </Router>
    )
  }
}

export default App
