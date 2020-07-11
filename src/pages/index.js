import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Header from '../components/header'
import Container from '../components/container'
import { ArtistList } from '../components/artistList'

export default ({ data }) => {
  const { episodesByArtist, knownArtists } = data
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>random episode - Was hören wir heute?</title>
      </Helmet>
      <Container>
        <Header />
        <p>
          Was sollen wir heute hören? Im Moment stehen{' '}
          <strong>{episodesByArtist.totalCount} Hörspiele</strong> von{' '}
          <strong>{episodesByArtist.group.length} Interpreten</strong> zur
          Auswahl!
        </p>
        <p>
          Klicke einfach direkt auf "Shuffle", um einen Vorschlag aus allen
          verfügbaren Folgen zu bekommen. Oder deaktiviere einzelne
          Hörspielserien, in dem du sie vorher anklickst.
        </p>
        <ArtistList
          episodesByArtist={episodesByArtist.group}
          knownArtists={knownArtists.edges}
        />
      </Container>
    </div>
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
