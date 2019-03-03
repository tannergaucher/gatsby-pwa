import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Styled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const IndexPage = () => (
  <Layout>
    <Styled>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Hello Gatsby PWA</h1>
    </Styled>
  </Layout>
)

export default IndexPage
