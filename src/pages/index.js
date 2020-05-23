import React from 'react'
import Header from '../components/header'
import Container from '../components/container'
import { graphql } from 'gatsby'
import { Randomizer } from '../components/randomizer'
import { ArtistList } from '../components/artistList'

export default ({ data }) => {
  const { episodesByArtist, knownArtists } = data
  return (
    <Container>
      <Header />
      <p>
        Was sollen wir heute hören? Im Moment stehen{' '}
        <strong>{episodesByArtist.totalCount} Hörspiele</strong> von{' '}
        <strong>{episodesByArtist.group.length} Interpreten</strong> zur
        Auswahl!
      </p>
      <Randomizer />
      <ArtistList
        episodesByArtist={episodesByArtist}
        knownArtists={knownArtists}
      />
    </Container>
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
    knownArtists: allArtistsJson {
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
