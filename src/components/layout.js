import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import './layout.css'
import Appbar from '../components/Appbar'

const theme = {}

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Roboto+Mono');
 
 body {
    background: #141414;
    color: white;
    font-family: 'Roboto Mono', monospace;
  }
`

const StyledBody = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas:
    'content'
    'appbar';
  grid-template-rows: 1fr auto;

  @media (min-width: 750px) {
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'appbar'
      'content';
  }
`

const Content = styled.div`
  grid-area: content;
  padding: 1em;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <StyledBody>
          <GlobalStyle />
          <Content>{children}</Content>
          <Appbar />
        </StyledBody>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
