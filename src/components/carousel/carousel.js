import React, { useState } from "react"
import Img from "gatsby-image"

import "./carousel.css"

const Carousel = ({images, altTexts}) => {
    const [state, setState] = useState({ slideIndex: 0 })
    const lastIndex = images.length - 1

    // Next/previous controls
    const prevSlide = (() => {
        if (state.slideIndex >= 1) {
            setState({slideIndex: state.slideIndex - 1 })
        }
    })
    const nextSlide = (() => {
        if (state.slideIndex < lastIndex) {
            setState({slideIndex: state.slideIndex + 1 })
        }
    })
    // Thumbnail image controls
    const changeSlide = ((n) => {
        setState({slideIndex: n})
    })

    return (
        <div className="slideshow-container">
            <div aria-live="polite">
            {images.map((images, index) => {
                return <div
                    key={`image-${index}`}
                    className={`${state.slideIndex === index ? `visible` : ``} slideshow-slide`}
                >
                    <Img fluid={images.node.childImageSharp.fluid} alt={altTexts[index]} />
                </div>
                })
            }
            </div>
            {/* <!-- Next and previous buttons --> */}
            <button className={`${state.slideIndex === 0 ? 'hidden' : `` } slideshow-prev`} 
                onClick={prevSlide} aria-label="Previous slide">
                &#10094;
            </button>
            <button className={`${state.slideIndex === lastIndex ? 'hidden' : `` } slideshow-next`}
                onClick={nextSlide} aria-label="Next slide">
                &#10095;
            </button>

            {/* <!-- The dots/circles --> */}
            <div className="slideshow-dots">
                {images.map((images, index) => {
                    return <button 
                        key={`dot-${index}`}
                        className={`${state.slideIndex === index ? `current` : ``} slideshow-dot`}
                        onClick={changeSlide.bind(this, index)}
                        aria-label={`image ${index}`}>
                    </button>
                })}
            </div>
        </div>
    )
}

export default Carousel
