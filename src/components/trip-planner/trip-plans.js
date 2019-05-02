import React, { useState, Component } from 'react'

export const TripPlans = ((props) => {
    let data = props.data
    return (
        <>
            {data !==  undefined ? <div>
                <ul>
                    <li>Event name: {data.tripName}</li>
                    <li>Location: {data.areaName}</li>
                    <li>Date: {data.date}</li>
                    <li>Type: {data.type}</li>
                </ul>
            </div> : null}
        </>
    )
})
