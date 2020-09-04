import React from 'react'
import Header from '../components/header'
import containerStyles from './container.module.scss'
import { Footer } from './footer'

export default ({ children }) => (
  <div className={containerStyles.container}>
    <Header />
    {children}
    <Footer />
  </div>
)
