import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import AnnounceDocTitle from 'react-announce-doc-title'
import './App.css'

import LoginFormDemo from './pages/login-form-demo'
import LiveRegion from './components/live-region'
import CardFlipDemo from './pages/card-flip-demo'

class App extends Component {
  render() {
    return (
      <AnnounceDocTitle title='Component Library'>
        <Router>
          <div className="App">
            <header className="App-header">
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
            <main className="main">
              <Route path="/login-form" component={LoginFormDemo}/>
              <Route path="/card-flip" component={CardFlipDemo}/>
            </main>
            <LiveRegion />
          </div>
        </Router>
      </AnnounceDocTitle>
    )
  }
}

export default App
