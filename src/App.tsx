import { RenderSquare } from './components/Square/RenderSquare'
import { Section } from './components/shared/wrappers/Section'
import { useCallback, useEffect, useState } from 'react'
import { Button } from './components/shared/ui/Button'
import { Input } from './components/shared/ui/Input'
import { MagicSquare } from './utils/solver'

export const App = () =>
{
  const [actionButton, setActionButton] = useState<boolean>(false)
  const [size, setSize] = useState<number>(3)
  const [sum, setSum] = useState<number>(0)
  const [grid, setGrid] = useState<number[]>(() => Array(size * size).fill(0))

  const generateGrid = () =>
  {
    const newGrid = Array(size * size).fill(0)

    setGrid(newGrid)
  }

  const handleGridChange = useCallback((index: number, value: number) =>
  {
    setGrid((prev) =>
    {
      const newGrid = [...prev]
      newGrid[index] = value
      return newGrid 
    })
  }, [])

  const handleSolveButton = () =>
  {
    if (actionButton)
    {
      setGrid([])
      generateGrid()
      setActionButton(false)
      setSum(0)
      setSize(0)
      return
    }

    setActionButton(true)

    const solver = new MagicSquare(grid, size, sum)
    const _grid = solver.resolver()

    if (_grid)
      setGrid(_grid)
  
    else
      alert('No solution found')
  }

  useEffect(() =>
  {
    if (size > 0)
      generateGrid()
  }, [size])

  return (
    <>
      <Section>
        <h1 className="text-3xl text-primary font-medium md:font-semibold">Magic Square Solver</h1>
        <p>Magic square is a mathematical game that consists of placing numbers in a square
        so that the sum of the numbers in each row, column and diagonal is the same.</p>
        <div className="my-5">
          <div className="flex flex-row w-full py-3">
            <div className="w-1/2">
              <Input title="Size" className="w-5/6" type="number" placeholder="3" value={undefined} onChange={(value) => setSize(Number(value))} />
            </div>
            <div className="w-1/2">
              <Input title="Sum" className="w-5/6" type="number" onChange={(value) => setSum(Number(value))} required />
            </div>
          </div>
          <Button text={actionButton ? "Clear" : "Solve"} disabled={!(size > 0 && sum > 0)} onClick={handleSolveButton} />
        </div>
      </Section>
      <Section>
        <div className="flex flex-col w-min gap-1">
          {grid.length > 0 && (
            <RenderSquare grid={grid} onChange={handleGridChange} size={size} disabledInputs={actionButton} />
          )}
        </div>
      </Section>
      <Section className="text-center">
        Developed by <span className="font-semibold">JMota</span>
      </Section>
    </>
  )
}
