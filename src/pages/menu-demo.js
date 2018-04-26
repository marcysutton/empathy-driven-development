import React, { Component } from 'react'
import Menu from '../components/menu'
import menuData from '../data/menu-data'

class MenuDemo extends Component {
  render() {
    return (
        <div>
            <Menu menuData={menuData} />
        </div>
    )
  }
}

export default MenuDemo
