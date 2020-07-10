import React from 'react'
import { Link } from 'gatsby'
import { ArtistTile } from './artistTile'
import listStyles from './artistList.module.scss'
import { chooseRandomEpisodeUrl } from "../common/util"

export class ArtistList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeArtists: props.knownArtists.edges,
      randomEpisode: null
    }
  }

  onShuffle() {
    const activeArtists = this.state.activeArtists.filter(artist => artist.active)
    const activeArtistNames = activeArtists.map(artist => artist.node.name)
    const eba = this.props.episodesByArtist.group.filter(artist => activeArtistNames.includes(artist.artistName))
    const flatted = eba.map(e => e.edges).flat()
    const randomEpisode = chooseRandomEpisodeUrl(flatted)
    this.setState({ randomEpisode })
  }

  onTileClick(id) {
    const artistIndex = this.state.activeArtists.findIndex(a => a.node.id === id)
    let newArray = [...this.state.activeArtists]
    newArray[artistIndex] = {...newArray[artistIndex], active: !newArray[artistIndex].active }
    this.setState({ activeArtists: newArray })
    this.onShuffle()
  }

  render() {
    return (
      <div>
        <Link to={this.state.randomEpisode}>Shuffle</Link>
        <div className={listStyles.wrapper}>
          <div className={listStyles.artistTile}>
            <ArtistTile
              artistName="Überrasch mich..."
              episodes={this.props.episodesByArtist.group.map(e => e.edges).flat()}
            />
          </div>
          {this.props.knownArtists.edges.map((artist, index) => {
            return (
              <div key={index} className={listStyles.artistTile}>
                <ArtistTile
                  artistId={artist.node.id}
                  artistName={artist.node.name}
                  artistImage={artist.node.image}
                  episodes={
                    this.props.episodesByArtist.group.filter(
                      group => group.artistName === artist.node.name
                    )[0].edges
                  }
                  onClick={this.onTileClick.bind(this)}
                  isActive={this.state.activeArtists[index].active}
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
