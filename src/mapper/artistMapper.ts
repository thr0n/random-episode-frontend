import { KnownArtistsGql } from 'src/types/external/GraphqlTypes'
import { KnownArtists } from 'src/types/KnownArtits'

export const mapArtists = (knownArtists: KnownArtistsGql): KnownArtists => {
  return {
    totalCount: knownArtists.totalCount,
    artists: knownArtists.edges.map((edge) => {
      return {
        id: edge.node.id,
        name: edge.node.name,
        image: edge.node.image
      }
    })
  }
}
