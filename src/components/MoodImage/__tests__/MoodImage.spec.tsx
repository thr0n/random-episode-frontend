import { render, screen } from '@testing-library/react'
import * as Gatsby from 'gatsby'
import React from 'react'
import { MoodImage } from '../MoodImage'

describe('MoodImage', () => {
  const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')

  beforeEach(() => {
    useStaticQuery.mockImplementation(() => ({
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

  it('Renders the a given image', () => {
    const testImage = 'test'

    render(
      <MoodImage image={testImage}>
        <div>A child div</div>
      </MoodImage>
    )

    expect(screen.getByText('A child div')).toBeInTheDocument()

    const moodImage = screen.getByRole('img')
    expect(moodImage).toBeInTheDocument()
    expect(moodImage).toHaveAttribute('alt', 'Mood illustration: test')
    expect(moodImage).toHaveAttribute('loading', 'lazy')
  })

  it('Renders without an image', () => {
    render(
      <MoodImage>
        <div>A child div with no mood image</div>
      </MoodImage>
    )

    expect(
      screen.getByText('A child div with no mood image')
    ).toBeInTheDocument()
  })
})
