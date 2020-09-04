import React from 'react'
import { FaGithub, FaHeart } from 'react-icons/fa'
import footerStyles from './footer.module.css'
import tapeIcon from '../images/re-icon.png'

export const Footer = () => (
  <footer className={footerStyles.container}>
    <img
      className={footerStyles.tapeImage}
      src={tapeIcon}
      alt="random-episode icon"
    />
    <div>
      Made with <FaHeart className={footerStyles.heart} /> in Hamburg.
    </div>
    <div className={footerStyles.githubBar}>
      <span className="margin-right">Source code is available on</span>
      <a
        href={'https://github.com/thr0n/random-episode-frontend'}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className={footerStyles.githubIcon} />
      </a>
    </div>
  </footer>
)
