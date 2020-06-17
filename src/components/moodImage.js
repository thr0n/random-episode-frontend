import React from 'react'
import moodImageStyles from "./moodimage.module.css"

export const MoodImage = props => (
  <div className={moodImageStyles.moodImageContainer}>
    <img src={props.image} className={moodImageStyles.moodImage} />
    <div className="mood-image-overlay">
      { props.children }
    </div>
  </div>
)
