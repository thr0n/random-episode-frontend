import React from 'react';
import {Link} from 'gatsby';
import buttonStyles from './button.module.scss'

export const Button = (props) => (
    <div className={buttonStyles.buttonContainer}>
        <Link to={props.to}>
            {props.children}
        </Link>
    </div>
)