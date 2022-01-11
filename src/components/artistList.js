import React from 'react'
import { ArtistTile } from './artistTile'
import * as artistListStyles from './artistList.module.scss'

export const ArtistList = (props) => (
  <div className={artistListStyles.wrapper}>
    <ArtistTile
      artistName="Überrasch mich..."
      episodes={props.episodesByArtist.group.map((e) => e.edges).flat()}
    />
    {props.knownArtists.edges.map((artist) => (
      <div key={artist.node.id}>
        <ArtistTile
          artistId={artist.node.id}
          artistName={artist.node.name}
          artistImage={artist.node.image}
          episodes={
            props.episodesByArtist.group.filter(
              (group) => group.artistName === artist.node.name
            )[0].edges
          }
        />
      </div>
    ))}
  </div>
)
