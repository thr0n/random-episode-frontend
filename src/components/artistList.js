import React from 'react'
import { ArtistTile } from './artistTile'
import listStyles from './artistList.module.scss'

export const ArtistList = props => (
  <div className={listStyles.wrapper}>
    <div className={listStyles.artistTile}>
      <ArtistTile
        artistName="Überrasch mich..."
        episodes={props.episodesByArtist.group.map(e => e.edges).flat()}
      />
    </div>
    {props.knownArtists.edges.map((artist, index) => {
      return (
        <div key={index} className={listStyles.artistTile}>
          <ArtistTile
            artistId={artist.node.id}
            artistName={artist.node.name}
            artistImage={artist.node.image}
            episodes={props.episodesByArtist.group.filter(group => group.artistName === artist.node.name)[0].edges}
          />
        </div>
      )
    })}
  </div>
)
