import React from "react"

import TripPlanner from '../components/trip-planner';
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Homepage" />
    <TripPlanner />
  </Layout>
)

export default IndexPage
