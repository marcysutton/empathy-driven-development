import React, { Component } from 'react'
import PropTypes from 'prop-types'
import baseStyles from './baseStyles'
import MenuIcon from './menuIcon'
import CloseIcon from './closeIcon'
import './menu.css'

export default class Menu extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  toggleMenu(options = {}) {
    const {isOpen, noStateChange} = options;
    const newState = {
      isOpen: typeof isOpen !== 'undefined' ? isOpen : !this.state.isOpen
    };

    this.setState(newState, () => {
      !noStateChange && this.props.onStateChange(newState);
    });
  }

  // Builds styles incrementally for a given element.
  getStyles(el, index, inline) {
    const propName = 'm' + el.replace(el.charAt(0), el.charAt(0).toUpperCase());

    // Set base styles.
    let output = baseStyles[el] ? this.getStyle(baseStyles[el]) : {};

    // Add custom styles.
    if (this.props.styles[propName]) {
      output = {
        ...output,
        ...this.props.styles[propName]
      };
    }

    // Add element inline styles.
    if (inline) {
      output = {
        ...output,
        ...inline
      };
    }

    return output;
  }

  getStyle(style, index) {
    let width = this.props.width;
    if (typeof width !== 'string') width = `${width}px`;

    return style(this.state.isOpen, width, this.props.right, index);
  }

  listenForClose(e) {
    e = e || window.event;

    if (this.state.isOpen && (e.key === 'Escape' || e.keyCode === 27)) {
      this.toggleMenu();
    }
  }

  shouldDisableOverlayClick() {
    if (typeof this.props.disableOverlayClick === 'function') {
      return this.props.disableOverlayClick();
    } else {
      return this.props.disableOverlayClick;
    }
  }

  componentDidMount() {
    window.onkeydown = this.listenForClose.bind(this);

    // Allow initial open state to be set by props.
    if (this.props.isOpen) {
      this.toggleMenu({isOpen: true, noStateChange: true});
    }
  }

  componentWillUnmount() {
    window.onkeydown = null;
  }

  componentWillReceiveProps(nextProps) {
    if (typeof nextProps.isOpen !== 'undefined' && nextProps.isOpen !== this.state.isOpen) {
      this.toggleMenu();
    }
  }

  render() {
    return (
      <div className="menu">
        <div
          className={`m-overlay ${this.props.overlayClassName}`}
          onClick={() => !this.shouldDisableOverlayClick() && this.toggleMenu()}
          style={this.getStyles('overlay')}
        />
        <div
          id={this.props.id}
          className={`m-menu-wrap ${this.props.className}`}
          style={this.getStyles('menuWrap')}
        >
          <div className={`m-menu ${this.props.menuClassName}`} style={this.getStyles('menu')} >
            <nav className={`m-item-list ${this.props.itemListClassName}`}>
              {React.Children.map(this.props.children, (item, index) => {
                if (item) {
                  return React.cloneElement(item, {key: index});
                }
              })}
            </nav>
          </div>
          <CloseIcon
            onClick={() => this.toggleMenu()}
            className={this.props.closeButtonClassName}
            closeClassName={this.props.closeClassName}
          />
        </div>
        <MenuIcon
          onClick={() => this.toggleMenu()}
          className={this.props.menuButtonClassName}
          barClassName={this.props.menuBarClassName}
        />
      </div>
    );
  }
}

Menu.propTypes = {
  bodyClassName: PropTypes.string,
  menuBarClassName: PropTypes.string,
  menuButtonClassName: PropTypes.string,
  closeButtonClassName: PropTypes.string,
  closeClassName: PropTypes.string,
  disableOverlayClick: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  id: PropTypes.string,
  isOpen: PropTypes.bool,
  itemListClassName: PropTypes.string,
  menuClassName: PropTypes.string,
  noOverlay: PropTypes.bool,
  onStateChange: PropTypes.func,
  right: PropTypes.bool,
  styles: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

Menu.defaultProps = {
  bodyClassName: '',
  menuBarClassName: '',
  menuButtonClassName: '',
  className: '',
  closeButtonClassName: '',
  closeClassName: '',
  id: '',
  itemListClassName: '',
  menuClassName: '',
  noOverlay: false,
  onStateChange: () => {},
  overlayClassName: '',
  styles: {},
  width: 300
};
