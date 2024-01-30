import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getNumbers = () => Math.ceil(Math.random() * 100)

  onButtonClick = () => {
    const randomNumber = this.getNumbers()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="count-heading">Count {count}</h1>
          <p className="count-type">Count is {displayText}</p>
          <div>
            <button
              className="button"
              type="button"
              onClick={this.onButtonClick}
            >
              Increment
            </button>
          </div>
          <p className="description">
            Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
