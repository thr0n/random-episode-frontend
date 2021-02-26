import React from 'react'
import { FaGithub, FaHeart } from 'react-icons/fa'
import footerStyles from './footer.module.css'
import tapeIcon from '../images/re-icon.png'
import { logout } from '../utils/auth'

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
      <div className="margin-right">Source code is available on</div>
      <a
        href={'https://github.com/thr0n/random-episode-frontend'}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className={footerStyles.githubIcon} />
      </a>
    </div>
    <div>
      <a href="#" onClick={e => {
        logout();
        e.preventDefault();
        }}>
          Logout
        </a>
    </div>
  </footer>
)
