/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'
import WinOrLoseCard from '../WinOrLoseCard/index'

class EmojiGame extends Component {
  state = {topScore: 0, clickedList: [], isGameEnd: true}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  emojiClicked = id => {
    const {emojisList} = this.props
    const {clickedList} = this.state
    const isPresent = clickedList.includes(id)
    console.log(isPresent)
    if (isPresent) {
      this.finishGameAndSetTopScore(clickedList.length)
    } else {
      if (emojisList.length - 1 === clickedList.length) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedList: [...prevState.clickedList, id],
      }))
    }
    console.log(clickedList)
  }

  finishGameAndSetTopScore = newScore => {
    const {topScore} = this.state
    if (newScore > topScore) {
      this.setState({topScore: newScore})
    } else {
      this.setState({isGameEnd: true})
    }
  }

  setIsGameEnd = value => {
    this.setState({isGameEnd: value})
  }

  restartGame = () => {
    this.setState({clickedList: []})
    this.setState({isGameEnd: false})
  }

  renderWinOrLose = () => {
    const {clickedList} = this.state
    const {emojisList} = this.props
    const isWon = emojisList.length === clickedList.length
    return (
      <div className="win-or-lose">
        <WinOrLoseCard
          isWon={isWon}
          score={clickedList.length}
          onPlayAgain={this.restartGame}
        />
      </div>
    )
  }

  renderEmojisList = () => {
    const shuffledEmojis = this.shuffledEmojisList()
    return (
      <div className="emojis-container">
        <ul className="lists-container">
          {shuffledEmojis.map(emojiItem => (
            <EmojiCard
              emojiItem={emojiItem}
              key={emojiItem.id}
              onClickEmoji={this.emojiClicked}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {topScore, clickedList, isGameEnd} = this.state

    return (
      <div className="game-container">
        <div className="container">
          <div className="navbar-container">
            <NavBar
              currentScore={clickedList.length}
              topScore={topScore}
              isGameEnd={isGameEnd}
            />
          </div>
          <div>
            {isGameEnd ? this.renderWinOrLose() : this.renderEmojisList()}
          </div>
        </div>
      </div>
    )
  }
}

export default EmojiGame
