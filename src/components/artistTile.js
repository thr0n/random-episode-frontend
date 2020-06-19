import React from 'react'
import { Link } from 'gatsby'
import { FaRandom } from 'react-icons/fa';
import { chooseRandomEpisodeUrl } from '../common/util'
import tileStyles from './artistTile.module.scss'

export const ArtistTile = props => (
  <div className={tileStyles.container}>
    <Link to={chooseRandomEpisodeUrl(props.episodes)}>
      {props.artistImage ? (
        <img
          src={props.artistImage.url}
          alt={props.artistName}
        />
      ) : (
        <div className={tileStyles.randomButtonContainer}>
          <FaRandom className={tileStyles.randomButton}/>
        </div>
      )}
      <span className={tileStyles.artistBar}>
        <span className={tileStyles.spacer}>{props.artistName}</span>
      </span>
    </Link>
  </div>
)
