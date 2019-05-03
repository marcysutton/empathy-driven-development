import React, { Component } from 'react'
import Layout from "../components/layout"

class GearList extends Component {
  render() {
    return (
      <Layout>
        <h2>Gear Packing List</h2>
        <p>It’s a bummer to forget a critical item when you’re headed to a cold snowy place.
        Here’s a handy checklist of things you might need.</p>
        <div className="gearlist">
          <div>
            <h3>All winter days</h3>
            <ul>
              <li>Snow jacket</li>
              <li>Snow pants</li>
              <li>Base layers top &amp; bottom</li>
              <li>Waterproof gloves</li>
              <li>Beanie</li>
              <li>Ski socks</li>
              <li>Ski boots</li>
              <li>Skis</li>
              <li>Poles</li>
              <li>Helmet</li>
              <li>Goggles</li>
              <li>Lunch</li>
              <li>Sunscreen</li>
            </ul>
          </div>
          <div>
            <h3>Backcountry days</h3>
            <ul>
              <li>Avalanche beacon</li>
              <li>Probe</li>
              <li>Shovel</li>
              <li>Touring hat</li>
              <li>Glove liners</li>
              <li>Map</li>
              <li>Touring skis</li>
              <li>Touring boots</li>
              <li>Skins</li>
              <li>Backpack</li>
              <li>Water</li>
              <li>Sunglasses</li>
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}
export default GearList
