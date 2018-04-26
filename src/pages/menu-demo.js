import React, { Component } from 'react'
import AnnounceDocTitle from 'react-announce-doc-title'
import Menu from '../components/menu'
import menuData from '../data/menu-data'

class MenuDemo extends Component {
  render() {
    return (
      <AnnounceDocTitle title='Menu - Component Library'>
        <div>
            <Menu menuData={menuData} />
        </div>
      </AnnounceDocTitle>
    )
  }
}

export default MenuDemo
