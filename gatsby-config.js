module.exports = {
  pathPrefix: '/random-episode-frontend',
  siteMetadata: {
    title: `random episode`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/data`
      }
    },
    `gatsby-transformer-json`
  ]
}
