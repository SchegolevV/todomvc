import { Component } from 'react'
import { formatDistanceToNow } from 'date-fns'

import EditingForm from '../EditingForm/editingForm'
import './task.css'

export default class Task extends Component {
  render() {
    const { id, text, onDelete, onEdit, onChangeStatus, status, hidden, time, onSubmitEdit } = this.props

    const timeSinceCreation = formatDistanceToNow(time, {
      includeSeconds: true,
      addSuffix: true,
    })

    let statusClass
    let editingForm

    hidden ? (statusClass = status + ' hidden') : (statusClass = status)

    if (status === 'editing') {
      editingForm = <EditingForm text={text} onSubmit={onSubmitEdit} id={id} onChangeStatus={onChangeStatus} />
    }

    return (
      <li className={statusClass}>
        <div className="view">
          <input className="toggle" type="checkbox" onChange={onChangeStatus} />
          <label>
            <span className="description">{text}</span>
            <span className="created">created {timeSinceCreation}</span>
          </label>
          <button className="icon icon-edit" onClick={onEdit}>
            edit
          </button>
          <button className="icon icon-destroy" onClick={onDelete}>
            delete
          </button>
        </div>
        {editingForm}
      </li>
    )
  }
}
