import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/carousel/carousel"

const imageData = [
    'Backpacking with Rainier the labradoodle',
    'Camping with the dog at a wilderness lake',
    'Carrying puppy Rainier on a mountain hike',
    'Mt. Baker Wilderness at Chain Lakes',
    'Skyline Lake reflection',
    'Bagley the cat wants to go van camping',
    'Sunny trail magic in the North Cascades',
    'Snowy Iceberg the Adventure Van',
    'Rainier in his snow suit in the Baker backcountry',
    'My splitboard in the snow',
]

class GalleryPage extends Component {
    render() {
        const data = this.props.data

        return (
            <Layout>
                <SEO title="Gallery" />
                <h2>Inspiration</h2>
                <Carousel images={data.gallery.edges} altTexts={imageData} />
            </Layout>
        )
    }
}

export const imageQuery = graphql`
    query {
        gallery: allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
            edges {
              node {
                name
                childImageSharp {
                  fluid(maxWidth: 400, maxHeight: 400) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
        }
    }
`

export default GalleryPage
