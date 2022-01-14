import { EpisodesByArtist, EpisodeSlug } from 'src/types/Episode'
import {
  EpisodesByArtistGql,
  EpisodeSlugsGql
} from 'src/types/external/GraphqlTypes'

export const mapEpisodesByArtist = (
  episodesByArtist: EpisodesByArtistGql
): EpisodesByArtist => ({
  artistCount: episodesByArtist.group.length,
  episodeCount: episodesByArtist.totalCount,
  groupedEpisodes: episodesByArtist.group.map((group) => ({
    artistName: group.artistName,
    totalCount: group.totalCount,
    episodes: group.edges.map((edge) => ({
      id: edge.node.id,
      artistId: edge.node.artistId,
      artistName: edge.node.artistName,
      title: edge.node.title,
      slug: edge.node.fields.slug
    }))
  }))
})

export const mapEpisodeSlugs = (slugs: EpisodeSlugsGql): EpisodeSlug[] =>
  slugs.edges.map((slug) => ({
    artistId: slug.node.artistId,
    slug: slug.node.fields.slug
  }))
