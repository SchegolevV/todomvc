/* eslint-disable prettier/prettier */
import { Component } from 'react'

export default class Timer extends Component {
  state = {
    timer: null,
    timerID: null,
  }
  componentDidMount() {
    this.setState({ timer: this.props.timer })
  }

  componentDidUpdate(pP, prevState) {
    if (prevState.timer !== this.state.timer) {
      if (this.state.timer < 1000) {
        this.onPause()
      }
      if (this.props.status === 'completed' || this.props.status === 'editing') {
        this.onPause()
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.timerID)
  }

  convertMs(ms) {
    let min = new Date(ms).getMinutes()
    let sec = new Date(ms).getSeconds()
    return `${min}:${sec}`
  }

  createTimer = () => {
    return this.convertMs(this.state.timer)
  }

  onPlay = () => {
    const id = setInterval(() => {
      this.setState(({ timer }) => {
        const currentTime = timer - 1000
        return {
          timer: currentTime,
        }
      })
    }, 1000)
    this.setState({
      timerID: id,
    })
  }

  onPause = () => {
    clearInterval(this.state.timerID)
    this.setState({
      timerID: null,
    })
  }

  render() {
    return (
      <span className="description">
        <button className="icon icon-play" onClick={this.onPlay}></button>
        <button className="icon icon-pause" onClick={this.onPause}></button>
        <span style={{ marginLeft: '10px' }}>{this.createTimer()}</span>
      </span>
    )
  }
}
