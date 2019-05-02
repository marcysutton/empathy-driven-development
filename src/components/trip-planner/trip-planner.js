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
                  <i className="fa fa-star"></i>
                </button>
              </div>
              <div className="label fit">
                <input type="text" placeholder="Name of trip" name="tripName" required />
              </div>
              <div className="label fit">
                <input type="text" placeholder="Name of wilderness area" name="areaName" required />
              </div>
              <div className="button-wrap">
                <button type="button" className="expand" title="Expand">
                  <i className="fa fa-caret-down"></i>
                </button>
              </div>
            </div>
            <div>
              <div className="inputGroup left">
                <button type="button">
                  <i className="fa fa-caret-left"></i>
                </button>
                <div className="label">
                  <input type="text" placeholder="2.5.19" name="date" />
                </div>
                <button type="button">
                  <i className="fa fa-caret-right"></i>
                </button>
              </div>
              <div className="button-wrap right">
                <button type="button">
                  <i className="fa fa-calendar"></i>
                </button>
              </div>
              <div className="select right">
                <div className="label">
                  <select name="type" required>
                    <option>Type of trip</option>
                    <option>Van camp</option>
                    <option>Backcountry ski</option>
                    <option>Backpacking</option>
                    <option>Kayak tour</option>
                    <option>Bikepacking</option>
                  </select>
                </div>
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
