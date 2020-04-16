import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import { graphql } from "gatsby"

export default ({ data }) =>
    <div>
        <Container>
            <Header />
            <p>What shall we listen to today? We've got <strong>{data.allDataJson.totalCount}</strong> episodes so far!</p>
        </Container>
    </div>

export const query = graphql`
    query {
    allDataJson {
      totalCount
    }
  }
`