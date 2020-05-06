import React from 'react'
import Header from '../components/header'
import Container from '../components/container'

export default ({ data }) => (
  <Container>
    <Header />
    <p>
      Dies ist die einzige Webiste auf deinem Computer, die dir jederzeit eine
      zufällige Hörspiel-Folge vorschlägt.
    </p>
  </Container>
)
