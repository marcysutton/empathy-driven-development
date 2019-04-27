import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, showModal }) => (
  <header>
    <div
      className="signup-btn"
      onClick={showModal.bind(this)}>
      <i className="fa fa-newspaper-o"></i>
    </div>
    <h1 className="App-title">
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
