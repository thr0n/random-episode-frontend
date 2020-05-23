import React from 'react'
import { ArtistTile } from './artistTile'
import listStyles from './artistList.module.css'

export const ArtistList = props => (
  <div className={listStyles.wrapper}>
    {props.knownArtists.edges.map((artist, index) => {
      return (
        <div key={index} className={listStyles.artistTile}>
          <ArtistTile
            artistId={artist.node.id}
            artistName={artist.node.name}
            artistImage={artist.node.image}
            episodes={result}
          />
        </div>
      )
    })}
  </div>
)
