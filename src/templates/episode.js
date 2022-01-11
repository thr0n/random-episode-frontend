import React from 'react'
import { graphql } from 'gatsby'
import { Container } from '../components/container'
import { chooseRandomEpisodeUrl } from '../common/util'
import { Button } from '../components/button'
import * as episodeStyles from './episode.module.css'

const Episode = ({ data }) => {
  const episode = data.dataJson
  const filteredEpisodes = data.allDataJson.edges.filter(
    (edge) => edge.node.artistId === episode.artistId
  )
  const alternativeProposal = chooseRandomEpisodeUrl(filteredEpisodes)

  return (
    <Container>
      <p />
      <div>
        <a href={episode.url}>
          <img
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

export const query = graphql`
  query ($slug: String!) {
    allDataJson {
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
    dataJson(fields: { slug: { eq: $slug } }) {
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
