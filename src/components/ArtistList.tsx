import React from 'react'
import { ArtistTile } from './ArtistTile'
import * as artistListStyles from './artistList.module.scss'
import { KnownArtist } from '../types/KnownArtits'
import { EpisodesByArtist, KnownArtists } from './RandomEpisodeApp'

interface ArtistListProps {
  knownArtists: KnownArtists
  episodesByArtist: EpisodesByArtist
}

export const ArtistList = (props: ArtistListProps) => {
  return (
    <div className={artistListStyles.wrapper}>
      <ArtistTile
        episodes={props.episodesByArtist.group.map((e) => e.edges).flat()}
      />
      {props.knownArtists.edges.map((artist: KnownArtist) => (
        <div key={artist.node.id}>
          <ArtistTile
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
}
