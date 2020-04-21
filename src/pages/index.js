import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import { graphql } from "gatsby"
import { Randomizer } from "../components/randomizer"


export default ({ data }) =>
  <Container>
    <Header />
    <p>
      Was sollen wir heute hören? Im Moment stehen <strong>{data.allDataJson.totalCount}</strong> Hörspiele zur Auswahl!
      </p>
    <Randomizer allEpisodes={data.allDataJson.edges} />
  </Container>

export const query = graphql`
    query {
    allDataJson {
      totalCount
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }
`