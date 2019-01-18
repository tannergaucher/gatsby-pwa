import React from 'react'
import styled from 'styled-components'
import Player from '../components/Player'

const StyledAppbar = styled.div`
  grid-area: appbar;
  background: #282828;
  border: 1px solid #000;
  padding: 0.3em;
`

const Appbar = () => (
  <StyledAppbar>
    <Player />
  </StyledAppbar>
)

export default Appbar
