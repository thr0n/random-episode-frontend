import React from 'react'
import { Link } from 'gatsby'
import navigationStyles from './navigation.module.scss'

export default (props) => (
  <div className={navigationStyles.navContainer}>
    <div>
      <Link to="/neueste-episoden">Neueste Episoden</Link>
    </div>
    <div>
      <Link to="/#about">Über</Link>
    </div>
    <div>
      <Link to="/contact">Kontakt</Link>
    </div>
  </div>
)
