function Board({squares, onClick}) {
  function renderSquare(i) {
    return (
      <button
        className="bg-white border border-solid	border-gray-400	float-left	text-2xl	font-bold	leading-9	h-9	-mr-px	-mt-px	p-0 text-center w-9 focus:outline-none focus:bg-gray-200"
        onClick={() => onClick(i)}
      >
        {squares[i]}
      </button>
    )
  }

  return (
    <div>
      <div className="after:clear-both after:table">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="after:clear-both after:table">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="after:clear-both after:table">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

export default Board
