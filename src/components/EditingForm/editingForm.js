import { Component } from 'react'
import PropTypes from 'prop-types'

export default class EditingForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChangeStatus: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
  }
  state = {
    label: this.props.text,
  }
  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()

    if (this.state.label.trim() === '') {
      return
    }
    const { id } = this.props
    this.props.onSubmit(id, this.state.label)
    this.props.onChangeStatus(id)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" className="edit" defaultValue={this.state.label} onChange={this.onLabelChange} />
      </form>
    )
  }
}
