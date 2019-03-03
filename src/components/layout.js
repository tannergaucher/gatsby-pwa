import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import Bar from './Bar'

const theme = {}

const GlobalStyle = createGlobalStyle` 
 body {
    padding: 0;
    margin: 0;
    background: #141414;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: calc(17px + 0.3vw);
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* remove bounce effect from browser for more native app feel */
    overscroll-behavior: none;
  }
`

const StyledBody = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas:
    'content'
    'appbar';
  grid-template-rows: 1fr auto;
`

const Content = styled.main`
  grid-area: content;
  padding: 1em;
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledBody>
      <GlobalStyle />
      <Content>{children}</Content>
      <Bar />
    </StyledBody>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
