import React from 'react'
import Header from '../components/header'
import containerStyles from './container.module.scss'
import { Footer } from './footer'
import { login, isAuthenticated } from '../utils/auth'
import tapeIcon from '../images/re-icon.png'

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]')
}

export default ({ children }) => {
  if (!isAuthenticated()) {
    return (
      <>
        <div className={containerStyles.welcomePage}>
          <div className={containerStyles.iconBar}>
            <img src={tapeIcon} alt="random-episode icon" />
          </div>
          <h1>random-episode</h1>
          <p>
            Wondering what's going on here? You can read about random-episode on
            my{' '}
            <a href="https://thr0n.github.io/how-to-solve-an-everyday-problem-with-node-js-gatsby-and-netlify">
              blog
            </a>{' '}
            or dev.to (coming soon!).
            <p>
              The source files are available on{' '}
              <a href="https://github.com/thr0n/random-episode-frontend">
                GitHub
              </a>
              .
            </p>
          </p>
          If you are one of the lucky people with access, please{' '}
          <span onClick={login} className={containerStyles.login}>
            login
          </span>
          !
        </div>
      </>
    )
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
