export class MagicSquare
{
  private grid: number[]
  private targetSum: number
  private size: number

  constructor(grid: number[], size: number, targetSum: number)
  {
    this.grid = grid
    this.size = size
    this.targetSum = targetSum
  }

  private isValidNumber(row: number, col: number, num: number): boolean
  {
    for (let i = 0; i < this.size; i++) 
    {
      if (this.grid[row * this.size + i] === num || this.grid[i * this.size + col] === num)
        return false
    }

    return true
  }

  private sumRow(row: number): number
  {
    let sum = 0

    for (let j = 0; j < this.size; j++)
    {
      sum += this.grid[row * this.size + j]
    }

    return sum
  }

  private sumCol(col: number): number
  {
    let sum = 0

    for (let i = 0; i < this.size; i++)
    {
      sum += this.grid[i * this.size + col]
    }

    return sum
  }

  private sumDiagonals(): number[]
  {
    let diag1 = 0, diag2 = 0

    for (let i = 0; i < this.size; i++)
    {
      diag1 += this.grid[i * this.size + i]
      diag2 += this.grid[i * this.size + (this.size - i - 1)]
    }

    return [diag1, diag2]
  }

  private recursiveResolver(row: number, col: number): boolean {
    if (row === this.size)
    {
      for (let i = 0; i < this.size; i++)
      {
        if (this.sumRow(i) !== this.targetSum || this.sumCol(i) !== this.targetSum)
          return false
      }

      const [diag1, diag2] = this.sumDiagonals()

      if (diag1 !== this.targetSum || diag2 !== this.targetSum)
        return false

      return true
    }

    if (col === this.size) return this.recursiveResolver(row + 1, 0);

    if (this.grid[row * this.size + col] === 0)
    {
      for (let num = 1; num <= this.size * this.size; num++)
      {
        if (this.isValidNumber(row, col, num))
        {
          this.grid[row * this.size + col] = num

          if (this.recursiveResolver(row, col + 1))
            return true

          this.grid[row * this.size + col] = 0
        }
      }

      return false
    }

    return this.recursiveResolver(row, col + 1)
  }

  public resolver(): number[] | null
  {
    if (this.grid.length !== this.size * this.size)
      return null

    if (this.recursiveResolver(0, 0))
      return this.grid

    else
      return null
  }
}