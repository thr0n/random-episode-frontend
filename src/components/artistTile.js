import React from 'react'
import { Link } from 'gatsby'
import { chooseRandomEpisodeUrl } from '../common/util'
import { ArtistTileImage } from './ArtistTileImage'
import * as artistTileStyles from './artistTile.module.scss'

export const ArtistTile = (props) => (
  <div className={artistTileStyles.artistTileLabel}>
    <div className={artistTileStyles.container}>
      <Link to={chooseRandomEpisodeUrl(props.episodes)}>
        <ArtistTileImage
          imgSrc={props.artistImage?.url}
          alt={props.artistName}
        />
        <div className={artistTileStyles.artistBar}>
          <span className={artistTileStyles.spacer}>{props.artistName}</span>
        </div>
      </Link>
    </div>
  </div>
)
