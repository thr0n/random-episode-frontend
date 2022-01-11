import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Navigation } from './navigation'
import tapes from '../images/tapes.webp'
import * as headerStyles from './header.module.scss'

export const Header = () => {
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
    <div className={headerStyles.noTopDistance}>
      <div className={headerStyles.headerImage}>
        <img src={tapes} alt="An audio tape collection" />
      </div>
      <div className={headerStyles.headerContainer}>
        <Link to="/" id="#top">
          <h1>{data.site.siteMetadata.title}</h1>
        </Link>
        <Navigation />
      </div>
    </div>
  )
}
