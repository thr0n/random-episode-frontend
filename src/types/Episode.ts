export interface Episode {
  id: string
  artistId: string
  artistName: string
  title: string
  slug: string
}

interface EpisodeCollection {
  totalCount: number
  artistName: string
  episodes: Episode[]
}

export interface EpisodesByArtist {
  artistCount: number
  episodeCount: number
  groupedEpisodes: EpisodeCollection[]
}

export interface EpisodeSlug {
  artistId: string
  slug: string
}
