import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { RandomEpisodeApp } from '../components/RandomEpisodeApp'

const Index = ({ data }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>random episode - Was hören wir heute?</title>
    </Helmet>
    <RandomEpisodeApp data={data} />
  </>
)

export const query = graphql`
  query {
    episodesByArtist: allDataJson {
      totalCount
      group(field: artistName) {
        totalCount
        artistName: fieldValue
        edges {
          node {
            id
            artistId
            artistName
            title
            fields {
              slug
            }
          }
        }
      }
    }
    knownArtists: allArtistsJson(sort: { fields: name }) {
      totalCount
      edges {
        node {
          id
          name
          image {
            height
            url
            width
          }
        }
      }
    }
  }
`

export default Index
