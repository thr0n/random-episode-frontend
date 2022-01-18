import React from 'react'
import { FaRandom } from 'react-icons/fa'
import * as artistTileImageStyles from './artistTileImage.module.scss'

interface ArtistTileImageProps {
  imgSrc: string | undefined
  artistName?: string
}

export const ArtistTileImage = (props: ArtistTileImageProps) => (
  <div className={artistTileImageStyles.tileButton}>
    {props.imgSrc !== undefined ? (
      <img src={props.imgSrc} alt={props.artistName} loading="lazy" />
    ) : (
      <div className={artistTileImageStyles.randomButtonContainer}>
        <FaRandom
          className={artistTileImageStyles.randomButton}
          title="random-icon"
        />
      </div>
    )}
  </div>
)
