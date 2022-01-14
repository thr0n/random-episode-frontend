import { ImageGql } from './external/GraphqlTypes'

interface KnownArtist {
  id: string
  name: string
  image: ImageGql
}

export interface KnownArtists {
  totalCount: number
  artists: KnownArtist[]
}
