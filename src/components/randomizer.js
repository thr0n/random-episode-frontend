import React from 'react'
import { Link } from 'gatsby'
import { chooseRandomEpisodeUrl } from "../common/util"

export class Randomizer extends React.Component {
  state = { episodeUrl: null }

  componentDidMount() {
    this.setState({
      episodeUrl: chooseRandomEpisodeUrl(this.props.allEpisodes)
    })
  }

  render = () => (
    <div>
      {this.state.episodeUrl && (
        <Link to={this.state.episodeUrl}>Schlag mir was vor!</Link>
      )}
    </div>
  )
}
