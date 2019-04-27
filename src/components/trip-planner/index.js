import React, { Component } from 'react'

import './trip-planner.css'

class TripPlanner extends Component {
  render() {
    return (
      <div id="tripPlanner">
        <form>
          <div>
            <div className="button-wrap left">
              <button type="button" title="My trips">
                <span className="visuallyhidden">My trips</span>
                <i className="fa fa-star"></i>
              </button>
            </div>
            <label className="fit">
              <span className="visuallyhidden">Name of trip</span>
              <input type="text" placeholder="Name of trip" />
            </label>
            <label className="fit">
              <span className="visuallyhidden">Name of ski area</span>
              <input type="text" placeholder="Name of ski area" />
            </label>
            <div className="button-wrap">
              <button type="button" className="expand" title="Expand">
                <span className="visuallyhidden">Expand widget</span>
                <i className="fa fa-caret-down"></i>
              </button>
            </div>
          </div>
          <div>
            <div className="inputGroup left">
              <button type="button" aria-label="Select a previous date">
                <i className="fa fa-caret-left"></i>
              </button>
              <label>
                <span className="visuallyhidden">Date of trip</span>
                <input type="text" placeholder="16.1.18" />
              </label>
              <button type="button" aria-label="Select a later date">
                <i className="fa fa-caret-right"></i>
              </button>
            </div>
            <div className="button-wrap right">
              <button type="button" aria-label="Date picker">
                <i className="fa fa-calendar"></i>
              </button>
            </div>
            <div className="select right">
              <label>
                <span className="visuallyhidden">type of trip</span>
                <select>
                  <option>Type of trip</option>
                  <option>Alpine ski resort</option>
                  <option>Backcountry</option>
                  <option>Nordic</option>
                </select>
              </label>
            </div>
            <div className="button-wrap right">
              <button className="submit">
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
export default TripPlanner;
