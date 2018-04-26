import React, { Component } from 'react'

import './card-flip.css'

class CardFlip extends Component {
    render() {
        return (
            <div className="team-member">
                <div className="team-content">
                    <div className="team-image">
                        <img src={this.props.image} alt="" />
                        <div className="team-content-hover" style={{ background: "#1c6300" }}>
                            <div className="gradient-overlay"></div>
                            <h5>{this.props.memberName}</h5>
                            <span className="team-subtitle">{this.props.subtitle}</span>
                            <p>{this.props.bio}</p>
                            <div className="team-socials">
                                <a href={this.props.twitterLink} target=" _blank" title="">
                                    <span className="fa fa-twitter"></span>
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
