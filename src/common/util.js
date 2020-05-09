export const chooseRandomEpisodeUrl = episodes =>
  episodes[Math.floor(Math.random() * episodes.length)].node
    .fields.slug
