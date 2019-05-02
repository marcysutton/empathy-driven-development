import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CloseIcon extends Component {
  getCloseStyle(type) {
    return {
      position: 'absolute',
      width: 3,
      height: 14,
      transform: type === 'before' ? 'rotate(45deg)' : 'rotate(-45deg)'
    };
  }

  render() {
    var icon;
    var buttonWrapperStyle = {
      position: 'absolute',
      width: 24,
      height: 24,
      right: 8,
      top: 8
    };
    var buttonStyle = {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      padding: 0,
      border: 'none',
      textIndent: -9999,
      background: 'transparent',
      cursor: 'pointer'
    };

    if (this.props.customIcon) {
      let extraProps = {
        className: 'm-close',
        style: {...{width: '100%', height: '100%'}, ...this.props.styles.mClose}
      };
      icon = React.cloneElement(this.props.customIcon, extraProps);
    } else {
      icon = (
        <span style={{position: 'absolute', top: '6px', right: '14px'}}>
          {['before', 'after'].map((type, i) => (
            <span
              key={i}
              className={`m-close ${this.props.closeClassName}`}
              style={{...this.getCloseStyle(type), ...this.props.styles.mClose}}
            />
          ))}
        </span>
      );
    }

    return (
      <div
        className={`m-close-button ${this.props.className}`}
        style={{...buttonWrapperStyle, ...this.props.styles.mCloseButton}}
      >
        {icon}
        <div onClick={this.props.onClick} style={buttonStyle}>
        </div>
      </div>
    );
  }
}

CloseIcon.propTypes = {
  closeClassName: PropTypes.string,
  styles: PropTypes.object
};

CloseIcon.defaultProps = {
  closeClassName: '',
  className: '',
  styles: {}
};
