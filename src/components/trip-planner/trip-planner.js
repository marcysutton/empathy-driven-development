import React, { useState, Component } from 'react'

import './trip-planner.css'
import { TripPlans } from './trip-plans'

function TripPlanner() {
    const [state, setState] = useState({})

    const submitFn = ((event) => {
      event.preventDefault()
      let target = event.target
      setState({data: {
        tripName: target.tripName.value,
        areaName: target.areaName.value,
        date: target.date.value,
        type: target.type.value
      }})
    })
    return (
      <>
        <p>Fill out the trip planner form to get started.</p>
        <div id="tripPlanner">
          <form onSubmit={submitFn} name="tripForm">
            <div>
              <div className="button-wrap left">
                <button type="button" title="My trips">
                  <span className="visuallyhidden">My trips</span>
                  <i className="fa fa-star"></i>
                </button>
              </div>
              <label className="fit">
                <span className="visuallyhidden">Name of trip</span>
                <input type="text" placeholder="Name of trip" name="tripName" required />
              </label>
              <label className="fit">
                <span className="visuallyhidden">Name of wilderness area</span>
                <input type="text" placeholder="Name of wilderness area" name="areaName" required />
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
                  <input type="text" placeholder="2.5.19" name="date" />
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
                  <select name="type" required>
                    <option>Type of trip</option>
                    <option>Van camp</option>
                    <option>Backcountry ski</option>
                    <option>Backpacking</option>
                    <option>Kayak tour</option>
                    <option>Bikepacking</option>
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
        <TripPlans data={state.data} />
      </>
    )
}
export default TripPlanner;
