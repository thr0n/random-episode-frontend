import React from 'react'
import { graphql } from 'gatsby'
import { Container } from '../components/Container'
import { compareDesc } from 'date-fns'
import { EpisodeGql } from '../types/Episode'

import * as latestEpisodesStyles from './latestEpisodes.module.scss'

interface ArtistGroup {
  totalCount: number
  artistName: string
  edges: EpisodeGql[]
}

interface LatestEpisodesProps {
  data: {
    episodesByArtist: {
      group: ArtistGroup[]
    }
  }
}

// TODO check EpisodeGql type
const LatestEpisodes = ({ data }: LatestEpisodesProps) => {
  const { episodesByArtist } = data

  const latestEpisodes = episodesByArtist.group.map(
    (artistGroup: ArtistGroup) => {
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
    }
  )

  return (
    <Container>
      <div className={latestEpisodesStyles.episodeOverlay}>
        <h2>Neueste Episoden</h2>
        {latestEpisodes.map((le) => (
          <div key={le.artist} className={latestEpisodesStyles.artistSection}>
            <h3>{le.artist}</h3>
            {le.episodes.map((item: EpisodeGql) => (
              <div
                key={item.node.id}
                className={latestEpisodesStyles.episodeList}
              >
                <a href={item.node.url}>
                  <img src={item.node.image_small?.url} alt="Album cover" />
                </a>
                <div className={''}>{item.node.title}</div>
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

export default LatestEpisodes
