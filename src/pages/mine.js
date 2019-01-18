import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const MinePage = ({ data }) => {
  const { edges } = data.allImageSharp
  return (
    <Layout>
      <h1>Mine</h1>

      <h3>Favorites</h3>
      {edges.forEach(img => {
        console.log(img)
        return <Img sizes={img.node.sizes} />
      })}

      <h3>From Jo</h3>
      {/* swipeable image modal */}

      <h3>From Frank</h3>
      {/* swipeable image modal */}

      <h3>From Al</h3>
      {/* swipeable image modal */}
    </Layout>
  )
}

export default MinePage
// query all sample images
export const query = graphql`
  query {
    allImageSharp {
      edges {
        node {
          sizes(maxWidth: 300) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  }
`
