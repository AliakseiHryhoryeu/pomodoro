import React, { FC } from 'react'
import classNames from 'classnames'

import './Badge.scss'

type BadgeProps = {
  color:string,
  onClick?:Function,
  className?:string
}

export const Badge:FC<BadgeProps> = ({ color, onClick, className }) => (
  <i
    onClick={e =>onClick}
    className={classNames('badge', { [`badge--${color}`]: color }, className)}
  ></i>
)
