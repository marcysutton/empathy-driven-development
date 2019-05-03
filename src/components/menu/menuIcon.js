import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MenuIcon extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  getLineStyle(index) {
    return {
      position: 'absolute',
      height: '20%',
      left: 0,
      right: 0,
      top: 20 * (index * 2) + '%',
      opacity: this.state.hover ? 0.6 : 1
    };
  }

  render() {
    let icon;
    let buttonStyle = {
      backgroundColor: 'transparent',
      margin: 0,
      padding: 0,
      border: 'none',
      fontSize: 8,
      cursor: 'pointer'
    };

    if (this.props.customIcon) {
      let extraProps = {
        className: 'm-icon',
        style: {...{width: '100%', height: '100%'}, ...this.props.styles.mIcon}
      };
      icon = React.cloneElement(this.props.customIcon, extraProps);
    } else {
      icon = (
        <span>
          {[0, 1, 2].map((bar) => (
            <span
              key={bar}
              className={`m-menu-bars ${this.props.barClassName}`}
              style={{...this.getLineStyle(bar), ...this.props.styles.mMenuBars}}
            />
          ))}
        </span>
      );
    }

    return (
      <div
        onClick={this.props.onClick}
        onMouseOver={() => this.setState({hover: true})}
        onMouseOut={() => this.setState({hover: false})}
        className={`m-menu-button ${this.props.className}`}
        style={buttonStyle}
        >
        {icon}
      </div>
    );
  }
}

MenuIcon.propTypes = {
  barClassName: PropTypes.string,
  styles: PropTypes.object
};

MenuIcon.defaultProps = {
  barClassName: '',
  className: '',
  styles: {}
};
