export interface ISquareItem
{
  onChange: (value: any) => void
  disabled?: boolean
  value?: string | number
}

export interface IRenderSquare
{
  grid: number[]
  onChange(index: number, value: any): void
  size: number
  disabledInputs?: boolean
}
