import type { IRenderSquare } from '../../types/square'
import React, { useCallback } from 'react'
import { Square } from './Square'

export const RenderSquare: React.FC<IRenderSquare> = ({ grid, onChange, size, disabledInputs }) =>
{
  const handleChange = useCallback((index: number, value: string | number) =>
  {
    onChange(index, value)
  }, [onChange])

  return (
    <div className="grid grid-cols-4 gap-1" style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}>
      {grid.map((value, index) => (
        <Square
          key={index}
          value={value}
          onChange={(value) => handleChange(index, value)}
          disabled={disabledInputs}
        />
      ))}
    </div> 
  )
}
