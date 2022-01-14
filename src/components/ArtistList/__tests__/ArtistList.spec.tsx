import React from 'react'
import renderer from 'react-test-renderer'
import { EpisodesByArtist } from 'src/types/Episode'
import { KnownArtists } from 'src/types/KnownArtits'
// import { render } from '@testing-library/react'
import { ArtistList } from '../ArtistList'

describe('ArtistList', () => {
  const knownArtists: KnownArtists = {
    totalCount: 1,
    artists: [
      {
        id: '1',
        image: {
          url: 'image-url',
          height: 100,
          width: 100
        },
        name: 'name'
      }
    ]
  }

  const episodesByArtist: EpisodesByArtist = {
    artistCount: 1,
    episodeCount: 1,
    groupedEpisodes: [
      {
        artistName: 'name',
        totalCount: 1,
        episodes: [
          {
            artistId: 'a1',
            artistName: 'name',
            slug: 'slug',
            id: 'id',
            title: 'title'
          }
        ]
      }
    ]
  }

  // react-test-renderer
  it("renders the 'random' icon if no image is provided", () => {
    const tree = renderer
      .create(
        <ArtistList
          knownArtists={knownArtists}
          episodesByArtist={episodesByArtist}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
