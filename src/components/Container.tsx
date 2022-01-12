import * as React from 'react'
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'
import * as containerStyles from './container.module.scss'

/*
if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]')
}
*/

interface ContainerProps {
  children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => (
  <>
    <div className={containerStyles.container}>
      <Header />
      {children}
    </div>
    <Footer />
  </>
)
