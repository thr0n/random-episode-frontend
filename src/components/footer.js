import React from "react"
import { FaGithub, FaHeart } from "react-icons/fa"
import footerStyles from "./footer.module.css"
import tapeIcon from "../images/re-icon.png"

export const Footer = () => (
  <footer class={footerStyles.container}>
    <img className={footerStyles.tapeImage} src={tapeIcon} alt="random-episode icon" />
    <div>
      Made with <FaHeart class={footerStyles.heart}/> in Hamburg.
    </div>
    <div class={footerStyles.githubBar}>
      <span class="margin-right">
        See the source code on
      </span>
      <a href={"https://github.com/thr0n/random-episode-frontend"}
         target="_blank"
         rel="noopener noreferrer" >
        <FaGithub class={footerStyles.githubIcon}/>
      </a>
    </div>
  </footer>
)
