import { IInput } from '../../../types/ui'
import React from 'react'
import clsx from 'clsx'

export const Input: React.FC<IInput> = ({ type, className, id, onChange, placeholder, required, title, disabled, value, hiddeZeros }) =>
{
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
  {
    const newValue = type === 'number'
      ? Number(event.target.value)
      : event.target.value

    if (onChange)
      onChange(newValue)
  }

  return (
    <div className={clsx({ 'flex flex-col': title })}>
      {title && (
        <label className="mb-1 text-primary text-left" htmlFor={id}>
          {title}
          {required && <span>*</span>}
        </label>
      )}
      <input
        type={type}
        id={id}
        onChange={handleChange}
        placeholder={placeholder}
        className={clsx('bg-input-background text-input-text border-input-border rounded-lg py-1.5 px-2.5', className)}
        required={required}
        disabled={disabled}
        value={value === 0 && hiddeZeros ? '' : value}
      />
    </div>
  )
}
