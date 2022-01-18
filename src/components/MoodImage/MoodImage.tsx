import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { mapImage } from '../../mapper/imageMapper'
import {
  GatsbyImageEdgeGraphql,
  GatsbyImageGraphql
} from 'src/types/external/GraphqlTypes'
import * as moodImageStyles from './moodimage.module.scss'

interface MoodImageProps {
  children: React.ReactNode
  image?: string
}

export const MoodImage = (props: MoodImageProps) => {
  const data: GatsbyImageGraphql = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
          absolutePath: { regex: "/images/" }
        }
      ) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(
                width: 600
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
      }
    }
  `)

  const graphqlImage = data.allFile.edges.find(
    (edge: GatsbyImageEdgeGraphql) => edge.node.name === props.image
  )

  const image = mapImage(graphqlImage)

  return (
    <div
      className={`${moodImageStyles.moodImageContainer} ${
        !image ? moodImageStyles.moodImageContainerNoImage : ''
      }`}
    >
      {image && (
        <GatsbyImage
          className={moodImageStyles.moodImage}
          image={image.gatsbyImageData}
          alt={`Mood illustration: ${image?.name}`}
        />
      )}
      <div className={moodImageStyles.moodImageOverlay}>{props.children}</div>
    </div>
  )
}
