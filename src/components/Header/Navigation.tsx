import React from 'react'
import { Link } from 'gatsby'
import * as navigationStyles from './navigation.module.scss'

export const Navigation = () => (
  <div className={navigationStyles.navContainer}>
    <div>
      <Link to="/neueste-episoden">Neueste Episoden</Link>
    </div>
    <div>
      <Link to="/#about">Über</Link>
    </div>
  </div>
)
