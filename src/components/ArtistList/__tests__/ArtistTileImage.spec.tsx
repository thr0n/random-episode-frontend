import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import { ArtistTileImage } from '../ArtistTileImage'

describe('ArtistTileImage', () => {
  // react-test-renderer
  it("renders the 'random' icon if no image is provided", () => {
    const tree = renderer
      .create(<ArtistTileImage imgSrc={undefined} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders an image tag if an image url is provided', () => {
    const tree = renderer
      .create(
        <ArtistTileImage imgSrc={'https://fake-image.org/my-image.png'} />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  // react-testing-library
  test('renders correctly (even using react-testing-library)', () => {
    render(<ArtistTileImage imgSrc={undefined} />)

    expect(screen.queryByRole('img')).not.toBeInTheDocument()
    expect(screen.queryByTitle('random-icon')).toBeInTheDocument()
  })

  test('renders correctly (even using react-testing-library)', () => {
    render(<ArtistTileImage imgSrc={'https://fake-image.org/my-image.png'} />)

    expect(screen.queryByRole('img')).toBeInTheDocument()
    expect(screen.queryByTitle('random-icon')).not.toBeInTheDocument()
  })
})
