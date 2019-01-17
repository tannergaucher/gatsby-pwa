import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

const MakePage = () => (
  <Layout>
    <h1>Make</h1>
    {/* Img here */}
    <form>
      <label>
        Add image
        <input type="file" />
      </label>
    </form>

    <form>
      <label>
        Add songs
        <input />
      </label>
    </form>

    <form>
      <label>
        Inscription
        <textarea />
      </label>
    </form>
  </Layout>
)

export default MakePage
