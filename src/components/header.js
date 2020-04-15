import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Navigation from "./navigation"
import Container from "./container"

export default () => {
    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
    )
    return <Container>
        <div>
            <Navigation />
            <h1>{data.site.siteMetadata.title}</h1>
        </div>
    </Container>
}