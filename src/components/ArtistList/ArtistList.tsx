import React from 'react'
import { EpisodesByArtist } from 'src/types/Episode'
import { KnownArtists } from 'src/types/KnownArtits'
import * as artistListStyles from './artistList.module.scss'
import { ArtistTile } from './ArtistTile'

interface ArtistListProps {
  knownArtists: KnownArtists
  episodesByArtist: EpisodesByArtist
}

export const ArtistList = (props: ArtistListProps) => {
  return (
    <div className={artistListStyles.wrapper}>
      <ArtistTile
        episodes={props.episodesByArtist.groupedEpisodes
          .map((e) => e.episodes)
          .flat()}
      />
      {props.knownArtists.artists.map((artist) => (
        <div key={artist.id}>
          <ArtistTile
            artistName={artist.name}
            artistImage={artist.image}
            episodes={
              props.episodesByArtist.groupedEpisodes.filter(
                (group) => group.artistName === artist.name
              )[0].episodes
            }
          />
        </div>
      ))}
    </div>
  )
}
