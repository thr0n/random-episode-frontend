export interface ImageGql {
  height: number
  url: string
  width: number
}

export interface EpisodeGql {
  node: {
    id: string
    artistId: string
    artistName: string
    title: string
    fields: {
      slug: string
    }
  }
}

export interface EpisodesByArtistGql {
  totalCount: number
  group: [
    {
      totalCount: number
      artistName: string
      edges: [EpisodeGql]
    }
  ]
}

export interface EpisodeSlugsGql {
  totalCount: number
  edges: {
    node: {
      artistId: string
      fields: {
        slug: string
      }
    }
  }[]
}

export interface DetailedEpisodeGql {
  artistId: string
  artistName: string
  episodeId: string
  title: string
  url: string
  image: ImageGql
}

export interface KnownArtistsGql {
  totalCount: number
  edges: [
    {
      node: {
        id: string
        name: string
        image: ImageGql
      }
    }
  ]
}
