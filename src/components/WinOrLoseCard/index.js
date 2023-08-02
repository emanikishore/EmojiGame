import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, onPlayAgain} = props

  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'
  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const altText = isWon ? 'won' : 'lose'

  return (
    <div className="win-or-lose-container">
      <div className="score1-container">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="score-label">{scoreLabel}</p>
        <p className="score1">{score}/12</p>
        <button className="btn" type="button" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
      <div className="win-or-lose-image">
        <img src={imageUrl} className="w-l-image" alt={altText} />
      </div>
    </div>
  )
}

export default WinOrLoseCard
