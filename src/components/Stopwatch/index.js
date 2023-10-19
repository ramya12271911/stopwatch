// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    timeInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  renderMinutes = () => {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {timeInSeconds} = this.state
    const seconds = Math.floor(timeInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  startButton = () => {
    this.timerId = setInterval(this.runClock, 1000)
  }

  runClock = () => {
    this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds + 1}))
  }

  stopButton = () => {
    clearInterval(this.timerId)
  }

  restartButton = () => {
    this.setState({timeInSeconds: 0})
    clearInterval(this.timerId)
  }

  render() {
    const timer = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="bg">
        <h1 className="heading">Stopwatch</h1>
        <div className="card">
          <div className="first">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              className="stopwatch"
              alt="stopwatch"
            />
            <p className="text">Timer</p>
          </div>
          <p className="timer">{timer}</p>
          <div className="btn-sec">
            <button
              type="button"
              className="btn-start"
              onClick={this.startButton}
            >
              Start
            </button>
            <button
              type="button"
              className="btn-stop"
              onClick={this.stopButton}
            >
              Stop
            </button>

            <button
              type="button"
              className="btn-reset"
              onClick={this.restartButton}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
