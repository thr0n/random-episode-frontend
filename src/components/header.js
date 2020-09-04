import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Navigation from './navigation'
import tapes from '../images/tapes.jpeg'
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
    <div className={headerStyles.noTopDistance}>
      <div className={headerStyles.headerImage}>
        <img src={tapes} />
      </div>
      <div className={headerStyles.headerContainer}>
        <Link to="/">
          <h1>{data.site.siteMetadata.title}</h1>
        </Link>
        <Navigation />
      </div>
    </div>
  )
}
