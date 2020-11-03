import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import { compareDesc } from 'date-fns'
import latestEpisodesStyles from './latestEpisodes.module.scss'

export default ({ data }) => {
  const { episodesByArtist } = data

  const latestEpisodes = episodesByArtist.group.map((artistGroup) => {
    const result = {
      artist: artistGroup.artistName,
      episodes: []
    }

    const dated = artistGroup.edges.map((edge) => {
      edge.node.released = new Date(edge.node.released)
      return edge
    })

    const ordered = dated.sort((a, b) =>
      compareDesc(a.node.released, b.node.released)
    )

    return { ...result, episodes: ordered.slice(0, 3) }
  })

  latestEpisodes.forEach(elem => {
    console.log(JSON.stringify(elem))
  })

  return (
    <Container>
      <div
        className={latestEpisodesStyles.episodeOverlay}>
        {latestEpisodes.map((le) => (
          <div key={le.artist} className={latestEpisodesStyles.artistSection}>
            <h3>{le.artist}</h3>
            {le.episodes.map((item) => (
              <div
                key={item.node.id}
                className={latestEpisodesStyles.episodeList}
              >
                <a href={item.node.url}>
                  <img src={item.node.image_small?.url} />
                </a>
                <div className={latestEpisodesStyles.episodeTitle}>
                  {item.node.title}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
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
            released
            url
            image_small {
              height
              url
              width
            }
            fields {
              slug
            }
          }
        }
      }
    }
  }
`
