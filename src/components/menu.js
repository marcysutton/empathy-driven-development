import React from 'react';
import ReactMenuAim from 'react-menu-aim';
import createReactClass from 'create-react-class';

import './menu.css'

var Menu = createReactClass({
  mixins: [ReactMenuAim],

  getInitialState: function() {
    return {
      activeMenuIndex: 0
    };
  },

  componentWillMount: function() {
    this.initMenuAim({
      menuSelector: '.menu',
      delay: 300,
      tolerance: 75
    });
    this.numMenuItems = this.props.menuData.length;
  },

  handleSwitchMenuIndex: function(index, keyboardModality) {
    this.setState({
      activeMenuIndex: index
    }, () => {
      if (keyboardModality) {
        this[this.itemSelector + this.state.activeMenuIndex].focus();
      }
    });
  },

  handleKeys: function(event) {
    switch (event.key) {
      case 'ArrowUp':
        this.handleUp();
        break;
      case 'ArrowDown':
        this.handleDown();
        break;
    }
  },

  handleUp: function() {
    if (this.state.activeMenuIndex > 0) {
      this.handleSwitchMenuIndex(this.state.activeMenuIndex - 1, true);
    }
  },

  handleDown: function(isSubMenuKeyActivated) {
    if (this.state.activeMenuIndex < this.numMenuItems - 1) {
      this.handleSwitchMenuIndex(this.state.activeMenuIndex + 1, true);
    }
  },

  render: function() {
    var self = this;
    var containerClassName = 'menu-container ';
    
    this.itemSelector = 'menuitem';

    return (
      <div className={containerClassName}>
        <ul className="menu" onMouseLeave={this.handleMouseLeaveMenu} role="menu"
          aria-activedescendant={this.itemSelector + this.state.activeMenuIndex}>
          {this.props.menuData.map(function(menu, index) {
            var className = 'menu-item';
            var active = false;
            if (index === self.state.activeMenuIndex) {
              className += ' active';
              active = true;
            }

            return (
              <li className={className} key={index}
                  role="presentation"
                  onMouseEnter={function() {
                    self.handleMouseEnterRow.call(self, index, self.handleSwitchMenuIndex);
                  }}>
                  <button role="menuitem"
                    tabIndex={active ? null : '-1'}
                    id={self.itemSelector + index}
                    aria-haspopup="true"
                    aria-expanded={active ? 'true' : 'false'}
                    onKeyDown={function(event) {
                      self.handleKeys(event);
                    }}
                    ref={(item) => self[self.itemSelector + index] = item }>
                    {menu.name}
                  </button>
                  <ul className="sub-menu"
                      role="menu"
                      style={{ display: active ? 'block' : 'none'}}>
                    {self.props.menuData[index].subMenu.map((function(subMenu, subIndex) {
                      return (
                        <li className="sub-menu-item"
                            key={subIndex}
                            role="menuitem"
                            tabIndex="-1">
                          {subMenu}
                        </li>
                      );
                    }))}
                  </ul>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
});

export default Menu;