import React from 'react'
import moodImageStyles from "./moodimage.module.scss"
import PropTypes from 'prop-types'

export const MoodImage = props => (
  <div className={moodImageStyles.moodImageContainer}>
    <img src={props.image} className={moodImageStyles.moodImage} />
    <div className="mood-image-overlay">
      { props.children }
    </div>
  </div>
)

MoodImage.propTypes = {
  image: PropTypes.string
}
