import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import play from '../images/play.svg'
import pause from '../images/pause.svg'

const PLAY_URL = 'https://api.spotify.com/v1/me/player/play'

class Player extends Component {
  state = {
    playing: false,
    token: '',
    id: '',
    uri: 'spotify:track:7xGfFoTpQ2E7fRF5lN10tr',
  }

  componentDidMount() {
    window.onSpotifyWebPlaybackSDKReady = () => {
      const token =
        'BQBMTfLM20gphJnMzM9DLmCguJ-Qc0qurN1xdRoYHceRT4d51sodqzDZdmsyEB4b0qdpIUlEX2P8DW0EEb3h-dNuIrtVxusTEVqIA1JrXIRQyJxq9HrBzFqitfRi-i0WvdXuLhTfZL4ksvnT1RmS13pq0S1sJcotCJDmLR7kl1I'
      const player = new Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => {
          cb(token)
          this.setState({ token: token })
        },
      })

      // Error handling
      player.addListener('initialization_error', ({ message }) => {
        console.error(message)
      })
      player.addListener('authentication_error', ({ message }) => {
        console.error(message)
      })
      player.addListener('account_error', ({ message }) => {
        console.error(message)
      })
      player.addListener('playback_error', ({ message }) => {
        console.error(message)
      })

      // Playback status updates
      player.addListener('player_state_changed', state => {
        console.log(state)
      })

      // Ready
      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id)
        // console.log(device_id)
        this.setState({ id: device_id })
      })

      // Not Ready
      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id)
      })

      // Connect to the player!
      player.connect()
    }
  }

  handleClick = () => {
    this.setState({ playing: !this.state.playing })
    this.togglePlay()
  }

  togglePlay = () => {}

  render() {
    return (
      <>
        <Helmet>
          <script src="https://sdk.scdn.co/spotify-player.js" />
        </Helmet>

        <StyledPlayer>
          <h6>00:02</h6>
          {this.state.playing ? (
            <Icon src={pause} onClick={this.handleClick} />
          ) : (
            <Icon src={play} onClick={this.handleClick} />
          )}
          <h6 className="player-playlist">SEKEPING MEMORIES</h6>
        </StyledPlayer>
      </>
    )
  }
}

export default Player

const StyledPlayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  h6 {
    margin: 0;
    font-size: 10px;
    letter-spacing: 1px;
    padding: 0.2em;
    color: grey;
  }
`
const Icon = styled.img`
  height: 35px;
  transition: 0.2s ease-in-out;
  margin: 0.2em;

  &:hover {
    transform: scale(1.07);
  }
`
