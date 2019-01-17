import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Just Press Play</h1>
    <p>Share a mixtape like it's the 90's</p>
    <form>
      <h2>Make a mix</h2>
      <h4>Sign In With Spotify</h4>
    </form>
  </Layout>
)

export default IndexPage
