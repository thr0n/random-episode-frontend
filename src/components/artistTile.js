import React from 'react'
import { Link } from 'gatsby'
import { chooseRandomEpisodeUrl } from '../common/util'
import tileStyles from './artistTile.module.css'

export const ArtistTile = props => (
  <div className={tileStyles.container}>
    <Link to={chooseRandomEpisodeUrl(props.episodes)}>
      <img
        src={props.artistImage.url}
        height={props.artistImage.height * 0.66}
        alt={props.artistName}
      />
      <span className={tileStyles.artistBar}>
        <span className={tileStyles.spacer}>{props.artistName}</span>
      </span>
    </Link>
  </div>
)
