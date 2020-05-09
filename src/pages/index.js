import React from 'react'
import Header from '../components/header'
import Container from '../components/container'
import { graphql } from 'gatsby'
import { Randomizer } from '../components/randomizer'
import { ArtistList } from '../components/artistList'

export default ({ data }) => {
  console.log(data)
  return (
    <Container>
      <Header />
      <p>
        Was sollen wir heute hören? Im Moment stehen{' '}
        <strong>{data.allDataJson.totalCount} Hörspiele</strong> von{' '}
        <strong>{data.allDataJson.group.length} Interpreten</strong> zur
        Auswahl!
      </p>
      <Randomizer allEpisodes={data.allDataJson.edges} />
      <ArtistList artists={data.knownArtists.edges} />
    </Container>
  )
}

export const query = graphql`
  query {
    knownArtists: allArtistsJson {
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
    allDataJson {
      group(field: artist) {
        artistName: fieldValue
      }
    }
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
  }
`
