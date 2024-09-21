import type { IButton } from '../../../types/ui'
import React from 'react'
import clsx from 'clsx'

export const Button: React.FC<IButton> = ({ text, children, className, disabled, id, onClick, type = "button", secondary }) =>
{
  const _className = clsx(
    { "bg-button-secondary-backgrund border-button-secondary-border text-button-secondary-text": secondary },
    { "bg-button-background border-button-border text-button-text": !secondary },
    { "opacity-50 cursor-not-allowed": disabled },
    { "hover:opacity-80": !disabled },
    "rounded-lg py-1.5 px-2.5 font-semibold whitespace-nowrap",
    className)

  const handleClick = () =>
  {
    if (onClick && !disabled)
      onClick()
  }

  return (
    <button
      id={id}
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={_className}
    >
      {text || children}
    </button>
  )
}
