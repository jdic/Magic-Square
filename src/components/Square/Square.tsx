import { ISquareItem } from '../../types/square'
import { Input } from '../shared/ui/Input'
import React from 'react'

export const Square: React.FC<ISquareItem> = ({ onChange, disabled, value }) =>
{
  return (
    <Input 
      type="number"
      value={value}
      className="w-10 h-10 md:w-20 md:h-20 text-center rounded-lg"
      onChange={onChange}
      disabled={disabled}
      min={1}
      hiddeZeros
    />
  )
}
