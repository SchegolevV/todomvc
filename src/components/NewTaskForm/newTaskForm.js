import { Component } from 'react'

export default class NewTaskForm extends Component {
  state = {
    label: '',
    initTime: {
      min: '',
      sec: '',
    },
  }

  onLabelChange = (e) => {
    this.setState({ label: e.target.value })
  }
  onMinChange = (e) => {
    this.setState(({ initTime }) => {
      return {
        initTime: { ...initTime, min: e.target.value },
      }
    })
  }
  onSecChange = (e) => {
    this.setState(({ initTime }) => {
      return {
        initTime: { ...initTime, sec: e.target.value },
      }
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { min, sec } = this.state.initTime
    const timer = min * 60000 + sec * 1000
    this.props.onAdd(this.state.label, timer)
    this.setState({
      label: '',
      initTime: {
        min: '',
        sec: '',
      },
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="new-todo-form">
        <input
          type="text"
          placeholder="What's need to be done"
          onChange={this.onLabelChange}
          value={this.state.label}
          className="new-todo"
        />
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          onChange={this.onMinChange}
          value={this.state.initTime.min}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Sec"
          onChange={this.onSecChange}
          value={this.state.initTime.sec}
        />
        <button type="submit" />
      </form>
    )
  }
}
