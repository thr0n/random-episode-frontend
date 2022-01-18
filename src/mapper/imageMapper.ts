import { GatsbyImageEdgeGraphql } from 'src/types/external/GraphqlTypes'
import { GatsbyImage } from 'src/types/Image'

export const mapImage = (
  image: GatsbyImageEdgeGraphql | undefined
): GatsbyImage | null =>
  image === undefined
    ? null
    : {
        name: image.node.name,
        gatsbyImageData: image.node.childImageSharp.gatsbyImageData
      }
