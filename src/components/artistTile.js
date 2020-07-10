import React from 'react'
import { Link } from 'gatsby'
import { FaRandom } from 'react-icons/fa'
import { chooseRandomEpisodeUrl } from '../common/util'
import tileStyles from './artistTile.module.scss'

export const ArtistTile = props => {
  const tileStyle = props.isActive ? null : tileStyles.inactiveTile
  return (
    <div className={`${tileStyles.container} ${tileStyle}`} onClick={() => props.onClick(props.artistId)}>
      {props.artistImage ? (
        <img src={props.artistImage.url} alt={props.artistName} />
      ) : (
        <div className={tileStyles.randomButtonContainer}>
          <FaRandom className={tileStyles.randomButton} />
        </div>
      )}
      <span className={tileStyles.artistBar}>
      <span className={tileStyles.spacer}>{props.artistName}</span>
    </span>
    </div>
  )
}
