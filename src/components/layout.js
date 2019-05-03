import React, { useState, useRef } from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import Modal from "react-modal"

import Header from "./header"
import Menu from "./menu/menu"
import SignupForm from "./signup-form"
import "./layout.css"

Modal.setAppElement('#___gatsby');

let modalStyles = {
  overlay : {
    backgroundColor: 'rgba(68,68,68,.95)',
    zIndex : 1
  }
}
function Layout({ children }) {
    const [state, setState] = useState({ modalOpen: false, menuOpen: false })
    const mainRef = useRef(null)
    const firstItemRef = useRef(null)

    const data = useStaticQuery(graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
            description
          }
        }
      }
    `)

    const isMenuOpen = (state) => {
      if (state.isOpen) {
        firstItemRef.current.focus()
      }
    }
    const pageFocus = () => {
      setState({menuOpen: false})
      // this needs to be converted to useEffect
      mainRef.current.focus()
    }
    const onUpdate = (modalOpen) => {
      setState({modalOpen})
    }
    const showModal = () => {
      onUpdate(true)
    }
    return (
      <div id="app-wrap">
        <Menu
          isOpen={state.menuOpen}
          onStateChange={ isMenuOpen }>
          <ul>
              <li><Link 
                  to="/"
                  ref={firstItemRef}
                  onClick={pageFocus}
              >
                  <i className="fa fa-fw fa-home" />
                  <span>Home</span>
              </Link></li>
              <li><Link
                  to="/gallery"
                  onClick={pageFocus}>
                  <i className="fa fa-fw fa-star" />
                  <span>Inspiration</span>
              </Link></li>
              <li><Link
                  to="/gearlist"
                  onClick={pageFocus}>
                  <i className="fa fa-fw fa-suitcase" />
                  <span>Gear Packing List</span>
              </Link></li>
              <li><Link
                  to="/friends"
                  onClick={pageFocus}>
                  <i className="fa fa-fw fa-question-circle" />
                  <span>Friends</span>
              </Link></li>
          </ul>
        </Menu>
        <div className="primary">
          <Header siteTitle={data.site.siteMetadata.title} showModal={showModal} />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            <main ref={mainRef} tabIndex="-1" className="main-content">
              {children}
            </main>
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </div>
        </div>
        <Modal
          isOpen={state.modalOpen}
          contentLabel="Modal"
          className="modal"
          style={modalStyles}
        >
          <button 
            className="close-btn"
            onClick={onUpdate.bind(this, false)}
            aria-label="Close newsletter signup">
            X
          </button>
          {SignupForm}
        </Modal>
      </div>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout 
