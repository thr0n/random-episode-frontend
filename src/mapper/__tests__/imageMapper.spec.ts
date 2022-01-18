import { GatsbyImageGraphql } from 'src/types/external/GraphqlTypes'
import { mapImage } from '../imageMapper'

describe('imageMapper', () => {
  it('Maps image data from GraphQL correctly', () => {
    const imageData: GatsbyImageGraphql = {
      allFile: {
        edges: [
          {
            node: {
              name: 'Image name',
              childImageSharp: {
                gatsbyImageData: {
                  width: 600,
                  height: 42,
                  layout: 'fixed',
                  images: {
                    fallback: {
                      src: 'fall-backsrc'
                    }
                  }
                }
              }
            }
          }
        ]
      }
    }

    const mappedImage = mapImage(imageData.allFile.edges[0])!
    expect(mappedImage.name).toEqual('Image name')
  })

  it('Returns null if no image was passed', () => {
    const mappedImage = mapImage(undefined)
    expect(mappedImage).toBeNull()
  })
})
