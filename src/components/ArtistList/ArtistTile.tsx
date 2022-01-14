import React from 'react'
import { Link } from 'gatsby'
import { chooseRandomEpisodeUrl } from '../../utils/randomEpisode'
import { ArtistTileImage } from './ArtistTileImage'
import { Episode, EpisodeSlug } from '../../types/Episode'
import * as artistTileStyles from './artistTile.module.scss'

interface ArtistTileProps {
  episodes: Episode[]
  artistName?: string
  artistImage?: {
    url: string
  }
}

export const ArtistTile = (props: ArtistTileProps) => {
  const slugs: EpisodeSlug[] = props.episodes.flatMap((episode) => {
    return {
      artistId: episode.artistId,
      slug: episode.slug
    }
  })
  return (
    <div className={artistTileStyles.artistTileLabel}>
      <div className={artistTileStyles.container}>
        <Link to={chooseRandomEpisodeUrl(slugs)}>
          <ArtistTileImage
            imgSrc={props.artistImage?.url}
            artistName={props.artistName}
          />
          <div className={artistTileStyles.artistBar}>
            <span className={artistTileStyles.spacer}>
              {props.artistName || 'Überrasch mich...'}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}
