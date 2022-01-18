import { render, screen } from '@testing-library/react'
import React from 'react'
import { Navigation } from '../Navigation'

describe('Navigation', () => {
  it('Renders the subnavigation correctly', () => {
    render(<Navigation />)

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(2)
    expect(links[0]).toHaveAttribute('href', '/neueste-episoden')
    expect(links[1]).toHaveAttribute('href', '/#about')
  })
})
