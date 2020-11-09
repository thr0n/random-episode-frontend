import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Container from '../components/container'
import { ArtistList } from '../components/artistList'
import { MoodImage } from '../components/moodImage'
import tape from '../images/tape-large.jpeg'
import { AboutSection } from '../components/aboutSection'
import indexStyles from './index.module.scss'
import { BackToTop } from '../components/backToTop'

export default ({ data }) => {
  const { episodesByArtist, knownArtists } = data
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>random episode - Was hören wir heute?</title>
      </Helmet>
      <Container>
        <div className={indexStyles.episodeOverlay}>
          <h2 id="episoden">Zufallsepisode</h2>
          <p>
            Was sollen wir heute hören? Im Moment stehen{' '}
            <strong>{episodesByArtist.totalCount} Hörspiele</strong> von{' '}
            <strong>{episodesByArtist.group.length} Interpreten</strong> zur
            Auswahl.
          </p>
          <p>
            Klicke auf eine bestimmte Kachel oder lass dich einfach überraschen!
          </p>
          <ArtistList
            episodesByArtist={episodesByArtist}
            knownArtists={knownArtists}
          />
          <p />
        </div>
        <MoodImage image={tape}>
          <AboutSection />
        </MoodImage>
      </Container>
      <BackToTop/>
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
