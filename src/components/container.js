import React from 'react'
import { Header } from '../components/header'
import { Footer } from './footer'
//import tapeIcon from '../images/re-icon.png'
import * as containerStyles from './container.module.scss'

/*
if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]')
}
*/

export const Container = ({ children }) => {
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
