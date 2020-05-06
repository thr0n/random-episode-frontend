import React from 'react'
import { Link } from 'gatsby'

export class Randomizer extends React.Component {
  state = { episodeUrl: null }

  componentDidMount() {
    this.setState({
      episodeUrl: this.chooseRandomEpisodeUrl(this.props.allEpisodes)
    })
  }

  chooseRandomEpisodeUrl = episodes =>
    episodes[Math.floor(Math.random() * this.props.allEpisodes.length)].node
      .fields.slug

  render = () => (
    <div>
      {this.state.episodeUrl && (
        <Link to={this.state.episodeUrl}>Schlag mir was vor!</Link>
      )}
    </div>
  )
}
