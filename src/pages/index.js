import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Just Press Play</h1>
    <p>Share a mixtape with a friend</p>
  </Layout>
)

export default IndexPage

{
  /* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  <Image />
</div> */
}
