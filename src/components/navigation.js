import React from 'react'
import { Link } from 'gatsby'

export default props => (
  <div style={{ display: 'flex' }}>
    <div className="margin-right">
      <Link to="/">Home</Link>
    </div>
    <div className="margin-right">
      <Link to="/about">Über</Link>
    </div>
    <div>
      <Link to="/contact">Kontakt</Link>
    </div>
  </div>
)
