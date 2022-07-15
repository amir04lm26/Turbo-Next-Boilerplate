import React from 'react'

import { IButtonProps } from './Button.models'
import styles from './Button.module.scss'

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: IButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary'
  return (
    <button
      type='button'
      className={[
        styles['storybook-button'],
        styles[`storybook-button--${size}`],
        styles[mode],
      ].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  )
}
