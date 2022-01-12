import React from 'react'
import { Link } from 'gatsby'
import { chooseRandomEpisodeUrl } from '../common/util'
import { ArtistTileImage } from './ArtistTileImage'
import * as artistTileStyles from './artistTile.module.scss'
import { Episode } from '../types/Episode'

interface ArtistTileProps {
  episodes: Episode[]
  artistName?: string
  artistImage?: {
    url: string
  }
}

export const ArtistTile = (props: ArtistTileProps) => {
  return (
    <div className={artistTileStyles.artistTileLabel}>
      <div className={artistTileStyles.container}>
        <Link to={chooseRandomEpisodeUrl(props.episodes)}>
          <ArtistTileImage
            imgSrc={props.artistImage?.url}
            artistName={props.artistName} />
          <div className={artistTileStyles.artistBar}>
            <span className={artistTileStyles.spacer}>{props.artistName || 'Überrasch mich...'}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}
