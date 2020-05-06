import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/header'
import Container from '../components/container'

export default ({ data }) => {
  const episode = data.dataJson

  return (
    <Container>
      <Header />
      <div>
        <div>
          <img
            src={episode.image.url}
            width={episode.image.width * 0.5}
            alt={episode.title}
          />
          <p>
            <a href={episode.url}>Abspielen auf Spotify</a>
          </p>
        </div>
      </div>
    </Container>
  )
}

export const query = graphql`
  query($slug: String!) {
    dataJson(fields: { slug: { eq: $slug } }) {
      artist
      title
      url
      image {
        url
        height
        width
      }
    }
  }
`
