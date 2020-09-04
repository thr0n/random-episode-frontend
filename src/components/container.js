import React from 'react'
import Header from '../components/header'
import containerStyles from './container.module.scss'
import { Footer } from './footer'

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

export default ({ children }) => (
  <div>
  <div className={containerStyles.container}>
    <Header />
    {children}
  </div>
  <Footer />
  </div>
)
