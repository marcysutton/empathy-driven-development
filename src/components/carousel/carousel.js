import React, { useState } from "react"
import Img from "gatsby-image"

import "./carousel.css"

const Carousel = ({images, altTexts}) => {
    const [state, setState] = useState({ slideIndex: 0 })
    const lastIndex = images.length - 1
    let labelTexts = []

    // Next/previous controls
    const prevSlide = (() => {
        if (state.slideIndex > 1) {
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
    // Labeling
    const prepLabel = ((num, imageName) => {
        let rval = 1
        for (var i = 2; i <= num; i++)
            rval = rval + i

        for (var k = 0; k < rval; k++)
            labelTexts.push(`${imageName}`)
        
        return labelTexts.toString()
    })

    return (
        <div className="slideshow-container">
            <div aria-live="polite">
            {images.map((images, index) => {
                return <div
                    key={`image-${index}`}
                    className={`${state.slideIndex === index ? `visible` : ``} slideshow-slide`}
                >
                    <Img fluid={images.node.childImageSharp.fluid} alt={`${prepLabel(index, altTexts[index])}`} />
                </div>
                })
            }
            </div>
            {/* <!-- Next and previous buttons --> */}
            <a className={`${state.slideIndex === 0 ? 'hidden' : `` } slideshow-prev`} 
                onClick={prevSlide}>
                &#10094;
            </a>
            <a className={`${state.slideIndex === lastIndex ? 'hidden' : `` } slideshow-next`}
                onClick={nextSlide}>
                &#10095;
            </a>

            {/* <!-- The dots/circles --> */}
            <div className="slideshow-dots">
                {images.map((images, index) => {
                    return <span 
                        key={`dot-${index}`}
                        className={`${state.slideIndex === index ? `current` : ``} slideshow-dot`}
                        onClick={changeSlide.bind(this, index)}>
                    </span>
                })}
            </div>
        </div>
    )
}

export default Carousel
