import './index.css'

const NavBar = props => {
  const {currentScore, topScore, isGameEnd} = props
  if (isGameEnd) {
    return null
  }

  return (
    <div className="nav-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="title">Emoji Game</h1>
      </div>
      <div className="score-container">
        <p className="score">Score: {currentScore}</p>
        <p className="topScore">Top Score: {topScore}</p>
      </div>
    </div>
  )
}

export default NavBar
