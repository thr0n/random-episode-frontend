import { KnownArtistsGql } from 'src/types/external/GraphqlTypes'
import { KnownArtists } from 'src/types/KnownArtits'
import { mapArtists } from '../artistMapper'

describe('artistMapper', () => {
  it('Maps image data from GraphQL correctly', () => {
    const givenArtists: KnownArtistsGql = {
      totalCount: 2,
      edges: [
        {
          node: {
            id: '1',
            name: 'Artist 1',
            image: {
              height: 10,
              url: 'artist1.png',
              width: 10
            }
          }
        },
        {
          node: {
            id: '2',
            name: 'Artist 2',
            image: {
              height: 10,
              url: 'artist2.png',
              width: 10
            }
          }
        }
      ]
    }

    const expectedArtists: KnownArtists = {
      totalCount: 2,
      artists: [
        {
          id: '1',
          image: {
            height: 10,
            url: 'artist1.png',
            width: 10
          },
          name: 'Artist 1'
        },
        {
          id: '2',
          image: {
            height: 10,
            url: 'artist2.png',
            width: 10
          },
          name: 'Artist 2'
        }
      ]
    }

    const mappedArtists = mapArtists(givenArtists)
    expect(mappedArtists.totalCount).toBe(expectedArtists.totalCount)
    expect(mappedArtists.artists).toHaveLength(expectedArtists.artists.length)
    expect(mappedArtists.artists).toEqual(
      expect.arrayContaining(expectedArtists.artists)
    )
  })
})
