import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, showModal }) => (
  <header>
    <button
      className="signup-btn"
      onClick={showModal.bind(this)}
      aria-label="Open newsletter signup">
      <i className="fa fa-newspaper-o"></i>
    </button>
    <h1 className="App-title">
      <Link
        to="/"
        style={{
          color: `#333`,
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
