import { IGeneric } from './generic'

export interface INebula extends IGeneric
{
  to?: string
  from?: string
  opacity?: string
}

export interface IInput extends IGeneric
{
  type: 'text' | 'number'
  placeholder?: string
  onChange?: (value: any) => void
  title?: string
  required?: boolean
  min?: number
  disabled?: boolean
  max?: number
  value?: string | number
  hiddeZeros?: boolean
}

export interface IButton extends IGeneric
{
  type?: 'button' | 'submit'
  onClick?: () => void
  text?: string
  disabled?: boolean
  children?: React.ReactNode
  secondary?: boolean
}
