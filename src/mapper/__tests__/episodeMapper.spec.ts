import { EpisodeSlug } from 'src/types/Episode'
import {
  EpisodesByArtistGql,
  EpisodeSlugsGql,
  KnownArtistsGql
} from 'src/types/external/GraphqlTypes'
import { KnownArtists } from 'src/types/KnownArtits'
import { mapEpisodeSlugs, mapEpisodesByArtist } from '../episodeMapper'

describe('episodeMapper', () => {
  it('Maps episodes by artist', () => {
    const testEpisodes: EpisodesByArtistGql = {
      totalCount: 3,
      group: [
        {
          artistName: 'Artist 1',
          totalCount: 2,
          edges: [
            {
              node: {
                artistId: 'artist1',
                artistName: 'Artist 1',
                fields: {
                  slug: '/a/1'
                },
                id: 'e1',
                title: 'Title 1'
              }
            },
            {
              node: {
                artistId: 'artist1',
                artistName: 'Artist 1',
                fields: {
                  slug: '/a/2'
                },
                id: 'e2',
                title: 'Title 2'
              }
            }
          ]
        },
        {
          artistName: 'Artist 2',
          totalCount: 1,
          edges: [
            {
              node: {
                artistId: 'artist2',
                artistName: 'Artist 2',
                fields: {
                  slug: '/a/3'
                },
                id: 'e3',
                title: 'Title 1'
              }
            }
          ]
        }
      ]
    }

    const episodesByArtist = mapEpisodesByArtist(testEpisodes)
    expect(episodesByArtist.artistCount).toBe(2)
    expect(episodesByArtist.episodeCount).toBe(3)
    expect(episodesByArtist.groupedEpisodes).toHaveLength(2)
    expect(episodesByArtist.groupedEpisodes[0].episodes).toEqual(
      expect.arrayContaining([
        {
          id: 'e1',
          artistId: 'artist1',
          artistName: 'Artist 1',
          title: 'Title 1',
          slug: '/a/1'
        },
        {
          id: 'e2',
          artistId: 'artist1',
          artistName: 'Artist 1',
          title: 'Title 2',
          slug: '/a/2'
        }
      ])
    )
    expect(episodesByArtist.groupedEpisodes[1].episodes).toEqual(
      expect.arrayContaining([
        {
          id: 'e3',
          artistId: 'artist2',
          artistName: 'Artist 2',
          title: 'Title 1',
          slug: '/a/3'
        }
      ])
    )
  })

  it('Maps episode slugs', () => {
    const testSlugs: EpisodeSlugsGql = {
      totalCount: 2,
      edges: [
        {
          node: {
            artistId: 'a',
            fields: {
              slug: 'a/1'
            }
          }
        },
        {
          node: {
            artistId: 'b',
            fields: {
              slug: 'b/1'
            }
          }
        }
      ]
    }
    const slugs = mapEpisodeSlugs(testSlugs)
    expect(slugs).toHaveLength(2)
    expect(slugs[0].artistId).toEqual('a')
    expect(slugs[0].slug).toEqual('a/1')
    expect(slugs[1].artistId).toEqual('b')
    expect(slugs[1].slug).toEqual('b/1')
  })
})
