import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import { chooseRandomEpisodeUrl } from '../common/util'
import randomizerStyles from './randomizer.module.css'

export const Randomizer = () => (
  <StaticQuery
    query={graphql`
      query {
        allEpisodes: allDataJson {
          totalCount
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className={randomizerStyles.spacer}>
        <Link to={chooseRandomEpisodeUrl(data.allEpisodes.edges)}>
          <span className={randomizerStyles.shuffleButton}>
            Schlag mir irgendetwas vor!
          </span>
        </Link>
      </div>
    )}
  />
)
