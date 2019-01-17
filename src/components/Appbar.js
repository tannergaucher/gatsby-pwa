import React from 'react'
import styled from 'styled-components'
import Link from '../components/styles/Link'

const StyledAppbar = styled.div`
  grid-area: appbar;
  background: grey;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    justify-content: space-around;
  }

  h6 {
    margin: 30px;
  }
`

const Appbar = () => (
  <StyledAppbar>
    <ul>
      <li>
        <Link to="/make">
          <h6>Make</h6>
        </Link>
      </li>
      <li>
        <Link to="/mine">
          <h6>Mine</h6>
        </Link>
      </li>
      <li>
        <Link to="/made">
          <h6>Made</h6>
        </Link>
      </li>
    </ul>
  </StyledAppbar>
)

export default Appbar
