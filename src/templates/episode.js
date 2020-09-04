import React from 'react'
import { graphql, Link } from 'gatsby'
import Header from '../components/header'
import Container from '../components/container'
import { chooseRandomEpisodeUrl } from '../common/util'
import episodeStyles from './episode.module.css'

export default ({ data }) => {
  const episode = data.dataJson
  const filteredEpisodes = data.allDataJson.edges.filter(
    (edge) => edge.node.artistId === episode.artistId
  )
  const alternativeProposal = chooseRandomEpisodeUrl(filteredEpisodes)

  return (
    <Container>
      <Header />
      <p/>
      <div>
        <a href={episode.url}>
          <img
            className={episodeStyles.episodeImage}
            src={episode.image.url}
            alt={episode.title}
          />
        </a>
        <div className={episodeStyles.buttonContainer}>
          <Link to={'/'}>Zurück</Link>
          <Link to={alternativeProposal}>
            Mehr von "{episode.artistName}"
          </Link>
        </div>
      </div>
    </Container>
  )
}

export const query = graphql`
  query($slug: String!) {
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
