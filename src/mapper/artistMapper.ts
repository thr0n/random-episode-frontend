import { KnownArtists } from 'src/components/RandomEpisodeApp'
import { KnownArtistsGql } from 'src/types/external/GraphqlTypes'

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
