import { Component } from 'react'
import PropTypes from 'prop-types'

export default class EditingForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChangeStatus: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
  }

  onEnter = (e) => {
    const { id } = this.props
    if (e.code === 'Enter') {
      this.props.onSubmit(id, e.target.value)
      this.props.onChangeStatus(id)
    }
  }

  render() {
    return <input type="text" className="edit" defaultValue={this.props.text} onKeyDown={this.onEnter} />
  }
}
