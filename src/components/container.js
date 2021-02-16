import React from 'react'
import Header from '../components/header'
import containerStyles from './container.module.scss'
import { Footer } from './footer'
import { login, isAuthenticated } from '../utils/auth'

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]')
}

export default ({ children }) => {
  if (!isAuthenticated()) {
    login()
    return <div>Redirecting to login...</div>
  }
  return (
    <div>
      <div className={containerStyles.container}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}
