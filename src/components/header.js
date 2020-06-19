import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Navigation from './navigation'
import Container from './container'
import headerStyles from './header.module.scss'

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <Container>
      <div className={headerStyles.headerContainer}>
        <h1>{data.site.siteMetadata.title}</h1>
        <Navigation />
      </div>
    </Container>
  )
}
