import './index.css'

const WinOrLoseCard = props => {
  const {score, refreshGamePlayAgain} = props

  const refreshGame = () => {
    refreshGamePlayAgain()
  }

  const resultMessage = score === 12 ? 'You Won' : 'You Lose'

  const Score = score === 12 ? 'Best Score' : 'Score'

  const resultImage =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="winOrLose">
      <div className="match-details">
        <h1 className="result-heading">{resultMessage}</h1>
        <p className="result-score">{Score}</p>
        <p className="result-points">{score}/12</p>
        <button
          onClick={refreshGame}
          className="play-again-button"
          type="button"
        >
          Play Again
        </button>
      </div>
      <img className="winOrLossImg" alt="win or lose" src={resultImage} />
    </div>
  )
}

export default WinOrLoseCard
