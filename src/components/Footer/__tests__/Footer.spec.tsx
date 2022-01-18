import { render, screen } from '@testing-library/react'
import React from 'react'
import { Footer } from '../Footer'

describe('Footer', () => {
  it('Should render the tape icon', () => {
    render(<Footer />)

    const icon = screen.getByRole('img')
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveAttribute('alt', 'random-episode icon')
  })

  it('Should render the heart icon', () => {
    render(<Footer />)

    expect(screen.getByText(/Made with/)).toBeInTheDocument()
    expect(screen.getByText(/in Hamburg./)).toBeInTheDocument()
  })

  it('Should render the GitHub part', () => {
    render(<Footer />)

    const githubLink = screen.getByRole('link')
    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/thr0n/random-episode-frontend'
    )
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(screen.getByText(/Source code is available on/)).toBeInTheDocument()
  })
})
