import React from 'react'
import PropTypes from 'prop-types'
import * as moodImageStyles from './moodimage.module.scss'

export const MoodImage = (props) => (
  <div className={moodImageStyles.moodImageContainer}>
    <img
      src={props.image}
      className={moodImageStyles.moodImage}
      alt="Mood illustration"
    />
    <div className={moodImageStyles.moodImageOverlay}>{props.children}</div>
  </div>
)

MoodImage.propTypes = {
  image: PropTypes.string
}
