import { render, screen } from '@testing-library/react'
import * as Gatsby from 'gatsby'
import React from 'react'
import { EpisodesByArtist } from 'src/types/Episode'
import { KnownArtists } from 'src/types/KnownArtits'
import { RandomEpisodeApp } from '../RandomEpisodeApp'

describe('RandomEpisodeApp', () => {
  const testProps: {
    episodesByArtist: EpisodesByArtist
    knownArtists: KnownArtists
  } = {
    episodesByArtist: {
      artistCount: 1,
      episodeCount: 1,
      groupedEpisodes: [
        {
          artistName: 'Die drei ???',
          totalCount: 1,
          episodes: [
            {
              artistId: '1',
              artistName: 'Die drei ???',
              id: '1',
              slug: '/und-der-superpapagei',
              title: '...und der Superpapagei'
            }
          ]
        }
      ]
    },
    knownArtists: {
      totalCount: 1,
      artists: [
        {
          id: '1',
          image: {
            height: 10,
            url: 'image-url',
            width: 10
          },
          name: 'Die drei ???'
        }
      ]
    }
  }

  const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')

  beforeEach(() => {
    useStaticQuery.mockImplementation(() => ({
      site: {
        siteMetadata: {
          title: 'random episode'
        }
      },
      allFile: {
        edges: [
          {
            node: {
              name: 'test',
              childImageSharp: {
                gatsbyImageData: {
                  height: 1,
                  width: 2,
                  images: {
                    fallback: {
                      src: 'fall-backsrc'
                    }
                  },
                  layout: 'fixed'
                }
              }
            }
          }
        ]
      }
    }))
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('...', () => {
    render(
      <RandomEpisodeApp
        episodesByArtist={testProps.episodesByArtist}
        knownArtists={testProps.knownArtists}
      />
    )

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'random episode'
    )

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(6)
    expect(links[3]).toHaveAttribute('href', '/und-der-superpapagei')
    expect(links[4]).toHaveAttribute('href', '/und-der-superpapagei')

    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
