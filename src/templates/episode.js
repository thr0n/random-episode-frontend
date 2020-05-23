import React from 'react'
import { graphql, Link } from 'gatsby'
import Header from '../components/header'
import Container from '../components/container'
import { chooseRandomEpisodeUrl } from '../common/util'
import episodeStyles from './episode.module.css'

export default ({ data }) => {
  const episode = data.dataJson
  const alternativeProposal = chooseRandomEpisodeUrl(data.allDataJson.edges)

  return (
    <Container>
      <Header />
      <div>
        <div>
          <img
            className={episodeStyles.episodeImage}
            src={episode.image.url}
            alt={episode.title}
          />
          <div
            style={{
              width: '320px',
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '10px'
            }}
          >
            <div>
              <a href={episode.url}>Abspielen auf Spotify</a>
            </div>
            <div>
              <Link to={'/'}>Zurück</Link>
            </div>
          </div>
          <p style={{ paddingTop: '10px' }}>
            <Link to={alternativeProposal}>Lieber etwas anderes...</Link>
          </p>
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
          fields {
            slug
          }
        }
      }
    }
    dataJson(fields: { slug: { eq: $slug } }) {
      artistId
      artistName
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
