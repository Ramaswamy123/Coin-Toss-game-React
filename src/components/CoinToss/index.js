import {Component} from 'react'
import './index.css'

const headImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {toss: headImage, headCount: 0, tailCount: 0}

  onClickButton = () => {
    const {headCount, tailCount} = this.state
    const number = Math.floor(Math.random() * 2)
    let image = ''
    let head = headCount
    let tail = tailCount
    if (number === 0) {
      image = headImage
      head += 1
    } else {
      image = tailImage
      tail += 1
    }
    this.setState({toss: image, headCount: head, tailCount: tail})
  }

  render() {
    const {toss, headCount, tailCount} = this.state
    const totalCount = headCount + tailCount
    return (
      <div className="app-container">
        <div className="bg-container">
          <div className="coin-container">
            <h1 className="coin-heading">Coin Toss Game</h1>
            <p className="para">Heads (or) Tails</p>
            <img src={toss} className="coin-image" alt="toss result" />
            <button
              className="coin-button"
              type="button"
              onClick={this.onClickButton}
            >
              Toss Coin
            </button>
            <div className="result-container">
              <p className="result">Total: {totalCount}</p>
              <p className="result">Heads: {headCount}</p>
              <p className="result">Tails: {tailCount}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
