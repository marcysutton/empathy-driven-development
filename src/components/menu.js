import React from 'react';
import ReactMenuAim from 'react-menu-aim';
import createReactClass from 'create-react-class';

import './menu.css'

var Menu = createReactClass({
  mixins: [ReactMenuAim],

  getInitialState: function() {
    return {
      activeMenuIndex: 0,
      activeSubMenuIndex: 0,
      subMenuKeyActive: false
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

  componentDidUpdate: function() {
    this.numSubMenuItems = this.props.menuData[this.state.activeMenuIndex].subMenu.length;
  },

  handleSwitchMenuIndex: function(index, subItemIndex, keyboardModality, isSubMenuKeyActivated) {
    this.setState({
      activeMenuIndex: index,
      activeSubMenuIndex: subItemIndex,
      subMenuKeyActive: isSubMenuKeyActivated || this.getInitialState().subMenuKeyActive
    }, () => {
      if (keyboardModality) {
        if (!this.state.subMenuKeyActive) {
          this[this.itemSelector + this.state.activeMenuIndex].focus();
        } else {
          this[this.subItemSelector + this.state.activeMenuIndex + '_' + this.state.activeSubMenuIndex].focus();
        }
      }
    });
  },

  handleKeys: function(event, isSubMenuKeyActivated) {
    switch (event.key) {
      case 'ArrowUp':
        this.handleUp(isSubMenuKeyActivated);
        break;
      case 'ArrowDown':
        this.handleDown(isSubMenuKeyActivated);
        break;
      case 'ArrowLeft':
        this.handleLeftRight(false);
        break;
      case 'ArrowRight':
        this.handleLeftRight(true);
        break;
    }
  },

  handleUp: function(isSubMenuKeyActivated) {
    if (this.state.activeMenuIndex > 0 && !this.state.subMenuKeyActive) {
      this.handleSwitchMenuIndex(this.state.activeMenuIndex - 1, 0, true, isSubMenuKeyActivated);
    } else if (this.state.subMenuKeyActive && this.state.activeSubMenuIndex > 0) {
      this.handleSwitchMenuIndex(this.state.activeMenuIndex, this.state.activeSubMenuIndex - 1, true, isSubMenuKeyActivated);
    }
  },

  handleDown: function(isSubMenuKeyActivated) {
    if (this.state.activeMenuIndex < this.numMenuItems - 1 && !this.state.subMenuKeyActive) {
      this.handleSwitchMenuIndex(this.state.activeMenuIndex + 1, 0, true, isSubMenuKeyActivated);
    } else if (this.state.subMenuKeyActive && this.state.activeSubMenuIndex < this.numSubMenuItems - 1) {
      this.handleSwitchMenuIndex(this.state.activeMenuIndex, this.state.activeSubMenuIndex + 1, true, isSubMenuKeyActivated)
    }
  },

  handleLeftRight: function(isSubMenuKeyActivated) {
    this.handleSwitchMenuIndex(this.state.activeMenuIndex, 0, true, isSubMenuKeyActivated);
  },

  render: function() {
    var self = this;
    var containerClassName = 'menu-container ';
    
    this.itemSelector = 'menuitem';
    this.subItemSelector = 'submenuitem';

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
                      aria-activedescendant={
                        self.state.subMenuKeyActive && self.state.activeMenuIndex === index ?
                          (self.subItemSelector + index + '_' + self.state.activeSubMenuIndex)
                          : null
                      }
                      style={{ display: active ? 'block' : 'none'}}>
                    {self.props.menuData[index].subMenu.map((function(subMenu, subIndex) {
                      let id = self.subItemSelector + index + '_' + subIndex;
                      return (
                        <li className="sub-menu-item"
                            key={subIndex}
                            role="menuitem"
                            tabIndex="-1"
                            id={id}
                            ref={(subItem) => self[id] = subItem}
                            onKeyDown={function(event) {
                              self.handleKeys(event, true);
                            }}>
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