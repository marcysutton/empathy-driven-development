import React, { Component } from 'react'

import './card-flip.css'

class CardFlip extends Component {
    constructor (props) {
        super(props)
        this.state = {
          isActive: false
        }
    }
    handleHover() {
        this.setState({
            isActive: !this.state.isActive
        })
    }
    render() {
        const activeClass = this.state.isActive ? "active" : ""
        return (
            <div className="team-member">
                <div className="team-content">
                    <div className={`team-image ${activeClass}`}
                        onMouseEnter={this.handleHover.bind(this)}
                        onMouseLeave={this.handleHover.bind(this)}>
                        <img src={this.props.image} alt="" />
                        <div className="team-content-hover" style={{ background: "#1c6300" }}>
                            <div className="gradient-overlay"></div>
                            <h5>{this.props.memberName}</h5>
                            <span className="team-subtitle">{this.props.subtitle}</span>
                            <p>{this.props.bio}</p>
                            <div className="team-socials">
                                <a href={this.props.twitterLink} target=" _blank" title="">
                                    <svg version="1.1" x="0px" y="0px"
                                        viewBox="0 0 273.4 222.2" style={{enableBackground: 'new 0 0 273.4 222.2'}}>
                                    <path style={{fill: '#fff'}} d="M273.4,26.3c-10.1,4.5-20.9,7.5-32.2,8.8c11.6-6.9,20.5-17.9,24.7-31C255,10.5,243,15.2,230.2,17.7C220,6.8,205.4,0,189.3,0
                                        c-31,0-56.1,25.1-56.1,56.1c0,4.4,0.5,8.7,1.5,12.8C88,66.5,46.7,44.2,19,10.3c-4.8,8.3-7.6,17.9-7.6,28.2c0,19.5,9.9,36.6,25,46.7
                                        c-9.2-0.3-17.8-2.8-25.4-7c0,0.2,0,0.5,0,0.7c0,27.2,19.3,49.8,45,55c-4.7,1.3-9.7,2-14.8,2c-3.6,0-7.1-0.4-10.6-1
                                        c7.1,22.3,27.9,38.5,52.4,39c-19.2,15-43.4,24-69.7,24c-4.5,0-9-0.3-13.4-0.8c24.8,15.9,54.3,25.2,86,25.2
                                        c103.2,0,159.6-85.5,159.6-159.6c0-2.4-0.1-4.9-0.2-7.3C256.4,47.4,265.9,37.5,273.4,26.3z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <h5>{this.props.memberName}</h5>
                    <span className="team-subtitle">{this.props.subtitle}</span>
                </div>
            </div>
        )
    }
}

export default CardFlip
