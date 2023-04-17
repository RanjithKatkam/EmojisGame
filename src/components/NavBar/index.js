// Write your code here.
import './index.css'

const Navbar = props => {
  const {lost, score, topScore} = props

  return (
    <nav className="navbar">
      <div className="points-container">
        <img
          className="logo"
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1 className="gameName">Emoji Game</h1>
      </div>
      {lost ? (
        ''
      ) : (
        <div className="points-container">
          <p className="score">Score: {score}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default Navbar
