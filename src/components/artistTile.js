import React from 'react'
import { Link } from 'gatsby'
import { FaRandom } from 'react-icons/fa'
import { chooseRandomEpisodeUrl } from '../common/util'
import * as artistTileStyles from './artistTile.module.scss'

export const ArtistTile = (props) => (
  <div className={artistTileStyles.container}>
    <Link to={chooseRandomEpisodeUrl(props.episodes)}>
      {props.artistImage ? (
        <img
          className={artistTileStyles.tileButton}
          src={props.artistImage.url}
          alt={props.artistName}
        />
      ) : (
        <div
          className={`${artistTileStyles.randomButtonContainer} ${artistTileStyles.tileButton}`}
        >
          <FaRandom className={artistTileStyles.randomButton} />
        </div>
      )}
      <span className={artistTileStyles.artistBar}>
        <span className={artistTileStyles.spacer}>{props.artistName}</span>
      </span>
    </Link>
  </div>
)
