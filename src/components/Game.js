import useLocalStorage from '../hooks/useLocalStorage'
import {
  calculateNextValue,
  calculateWinner,
  calculateStatus,
} from '../utils/utils'
import Board from './Board'

function Game() {
  const [history, setHistory] = useLocalStorage('tic-tac-toe:history', [
    Array(9).fill(null),
  ])
  const [currentStep, setCurrentStep] = useLocalStorage('tic-tac-toe:step', 0)

  const currentSquares = history[currentStep]
  const nextValue = calculateNextValue(currentSquares)
  const winner = calculateWinner(currentSquares)
  const status = calculateStatus(winner, currentSquares, nextValue)

  function selectSquare(square) {
    if (winner || currentSquares[square]) return
    const newHistory = history.slice(0, currentStep + 1)
    const squares = [...currentSquares]
    squares[square] = nextValue
    setHistory([...newHistory, squares])
    setCurrentStep(newHistory.length)
  }

  function restart() {
    setHistory([Array(9).fill(null)])
    setCurrentStep(0)
  }

  const moves = history.map((stepSquares, step) => {
    const description = step ? `Go to move #${step}` : 'Go to game start'
    const isCurrentStep = step === currentStep
    return (
      <li key={step}>
        <button
          className={
            isCurrentStep
              ? 'bg-transparent text-black font-bold py-1 px-2 rounded opacity-50 cursor-not-allowed'
              : 'bg-transparent hover:bg-blue-500 text-blue-700 font-medium hover:text-white px-2 border border-blue-500 hover:border-transparent rounded'
          }
          disabled={isCurrentStep}
          onClick={() => setCurrentStep(step)}
        >
          {description} {isCurrentStep ? '(current)' : null}
        </button>
      </li>
    )
  })

  return (
    <div className="flex flex-row text-sm	m-5	min-h-game">
      <div className="game-board">
        <Board squares={currentSquares} onClick={selectSquare} />
        <button
          className="bg-red-500 hover:bg-red-700 mt-5 text-white font-bold py-1 px-2 border border-blue-700 rounded"
          onClick={restart}
        >
          restart
        </button>
      </div>
      <div className="ml-5 min-w-gameinfo">
        <div>{status}</div>
        <ol className="pl-7">{moves}</ol>
      </div>
    </div>
  )
}

export default Game
