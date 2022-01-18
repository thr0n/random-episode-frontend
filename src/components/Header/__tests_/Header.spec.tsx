import React from 'react'
import * as Gatsby from 'gatsby'
import { render, screen } from '@testing-library/react'
import { Header } from '../Header'

describe('Header', () => {
  const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')

  beforeEach(() => {
    useStaticQuery.mockImplementation(() => ({
      site: {
        siteMetadata: {
          title: 'Test title'
        }
      }
    }))
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Renders heading and image', async () => {
    render(<Header />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Test title')

    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('alt', 'An audio tape collection')
  })

  it('Renders navigation links', async () => {
    render(<Header />)

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(3)
    expect(links[0]).toHaveAttribute('href', '/')
    expect(links[1]).toHaveAttribute('href', '/neueste-episoden')
    expect(links[2]).toHaveAttribute('href', '/#about')
  })
})
