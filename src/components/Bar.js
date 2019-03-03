import React from 'react'
import styled from 'styled-components'
import Link from './styles/Link'

const Styled = styled.div`
  grid-area: appbar;
  background: #282828;
  border: 1px solid #000;
  padding: 0.3em;
  display: flex;
  justify-content: center;

  > * {
    padding: 1em;
  }
`

const Bar = () => (
  <Styled>
    <Link to="/">Home</Link>
    <Link to="/">Content</Link>
    <Link to="/me">Profile</Link>
  </Styled>
)

export default Bar
