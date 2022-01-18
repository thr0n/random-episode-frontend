import { EpisodeSlug } from '../types/Episode'

export const chooseRandomEpisodeUrl = (episodes: EpisodeSlug[]) =>
  episodes[Math.floor(Math.random() * episodes.length)].slug
