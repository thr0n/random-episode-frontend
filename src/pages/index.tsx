import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import {
  EpisodesByArtistGql,
  KnownArtistsGql
} from 'src/types/external/GraphqlTypes'
import { RandomEpisodeApp } from '../components/RandomEpisodeApp'
import { mapArtists } from '../mapper/artistMapper'
import { mapEpisodesByArtist } from '../mapper/episodeMapper'

interface Props {
  data: {
    episodesByArtist: EpisodesByArtistGql
    knownArtists: KnownArtistsGql
  }
}

const Index = ({ data }: Props) => {
  const episodesByArtist = mapEpisodesByArtist(data.episodesByArtist)
  const knownArtists = mapArtists(data.knownArtists)

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'de'
        }}
      >
        <meta charSet="utf-8" />
        <title>random episode - Was hören wir heute?</title>
      </Helmet>
      <RandomEpisodeApp
        episodesByArtist={episodesByArtist}
        knownArtists={knownArtists}
      />
    </>
  )
}

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
