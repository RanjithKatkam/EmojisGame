import {Component} from 'react'

import './index.css'

import NavBar from '../NavBar'

import WinOrLoseCard from '../WinOrLoseCard'

import EmojiCard from '../EmojiCard'

const selectedIds = []

let topScores = 0

class EmojiGame extends Component {
  state = {
    emojisLists: '',
    score: 0,
    topScore: 0,
    lost: false,
  }

  shuffledEmojisList = id => {
    const {emojisList} = this.props

    const {score} = this.state

    if (
      selectedIds.includes(id) === false &&
      selectedIds.length < emojisList.length - 1
    ) {
      this.setState({emojisLists: emojisList.sort(() => Math.random() - 0.5)})
      selectedIds.push(id)
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (selectedIds.length === emojisList.length - 1) {
      this.setState(prevState => ({score: prevState.score + 1}))
      if (score > topScores) {
        topScores = score
        this.setState({topScore: topScores + 1})
      }
      this.setState({lost: true})
    } else {
      this.setState({lost: true})
      if (score > topScores) {
        topScores = score
        this.setState({topScore: topScores + 1})
      }
    }
  }

  refreshGamePlayAgain = () => {
    const {emojisList} = this.props

    this.setState({
      emojisLists: emojisList.sort(() => Math.random() - 0.5),
      lost: false,
      score: 0,
    })
  }

  render() {
    const {emojisList} = this.props
    const {emojisLists, topScore, score, lost} = this.state

    return (
      <div className="main-container">
        <NavBar
          lost={lost}
          emojisLists={emojisLists}
          score={score}
          topScore={topScore}
        />
        <div className="container">
          {lost ? (
            <div className="win-lose">
              <WinOrLoseCard
                refreshGamePlayAgain={this.refreshGamePlayAgain}
                score={score}
              />
            </div>
          ) : (
            <ul className="game">
              {emojisList.map(eachItem => (
                <EmojiCard
                  shuffledEmojisList={this.shuffledEmojisList}
                  eachItem={eachItem}
                  key={eachItem.id}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
