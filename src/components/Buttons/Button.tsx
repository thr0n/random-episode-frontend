import React from 'react'
import { Link } from 'gatsby'
import * as buttonStyles from './button.module.scss'

interface ButtonProps {
  to: string,
  children: React.ReactNode
}

export const Button = (props: ButtonProps) => (
  <div className={buttonStyles.buttonContainer}>
    <Link to={props.to}>{props.children}</Link>
  </div>
)
