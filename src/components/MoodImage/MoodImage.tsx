import React from 'react'
import PropTypes from 'prop-types'
import * as moodImageStyles from './moodimage.module.scss'

interface MoodImageProps {
  children: React.ReactNode
  image: string // TODO find better type!
}

export const MoodImage = (props: MoodImageProps) => (
  <div className={moodImageStyles.moodImageContainer}>
    <img
      loading='lazy'
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
