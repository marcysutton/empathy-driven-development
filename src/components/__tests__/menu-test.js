/*eslint no-unused-expressions:0 */
'use strict';

import ReactDOM from 'react-dom';
import React from 'react';
import { shallow, mount } from 'enzyme';
// import Utils from '../../../tests/utils';
// import simulant from 'simulant';
import Menu from '../menu';
import menuData from '../../data/menu-data';


function injectCSS() {
  var link = document.createElement('link');
  link.href = './menu.css';
  link.type = 'text/css';
  link.rel = 'stylesheet';
  document.head.appendChild(link);

  link.onload = () => {

  };
}

injectCSS();

describe('ReactMenuAim', () => {
  let node;

  beforeEach(() => {
    node =  mount(<Menu menuData={menuData} />);
  });

  afterEach(() => {
    node = null;
  });

  it('should mount without error', () => {
    expect(node.find('.menu-container')).toBeDefined();
  });

  it('should open with the keyboard', () => {
    var menuItem = node.first('.sub-menu-item');
    console.log(menuItem);
    // menuItem.simulate('keypress', {key: 'Enter'});
    // let event = simulant( 'keypress', { key: 'Enter' });
    // simulant.fire( menuItem, event );

    expect(menuItem).toBeDefined();
  })
});