import { graphql } from 'gatsby'
import React from 'react'
import { Button } from '../components/Buttons/Button'
import { Container } from '../components/Container'
import { EpisodeSlug } from 'src/types/Episode'
import {
  EpisodeSlugsGql,
  DetailedEpisodeGql
} from 'src/types/external/GraphqlTypes'
import { mapEpisodeSlugs } from '../mapper/episodeMapper'
import { chooseRandomEpisodeUrl } from '../utils/randomEpisode'
import * as episodeStyles from './episode.module.scss'

const Episode = ({ data }: EpisodeProps) => {
  const episode = data.detailedEpisode

  const episodeSlug: EpisodeSlug[] = mapEpisodeSlugs(data.allEpisodes)

  const filteredEpisodes = episodeSlug.filter(
    (edge) => edge.artistId === episode.artistId
  )
  const alternativeProposal = chooseRandomEpisodeUrl(filteredEpisodes)

  return (
    <Container>
      <p />
      <div>
        <a href={episode.url}>
          <img
            height={episode.image.height}
            width={episode.image.width}
            className={episodeStyles.episodeImage}
            src={episode.image.url}
            alt={episode.title}
          />
        </a>
        <div className={episodeStyles.buttonContainer}>
          <Button to={'/'}>Zurück</Button>
          <Button to={alternativeProposal}>
            Mehr von "{episode.artistName}"
          </Button>
        </div>
      </div>
    </Container>
  )
}

interface EpisodeProps {
  data: {
    allEpisodes: EpisodeSlugsGql
    detailedEpisode: DetailedEpisodeGql
  }
}

export const query = graphql`
  query ($slug: String!) {
    allEpisodes: allDataJson {
      totalCount
      edges {
        node {
          artistId
          fields {
            slug
          }
        }
      }
    }
    detailedEpisode: dataJson(fields: { slug: { eq: $slug } }) {
      artistId
      artistName
      episodeId
      title
      url
      image {
        url
        height
        width
      }
    }
  }
`

export default Episode
