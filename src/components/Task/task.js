import { formatDistanceToNow } from 'date-fns'
import { useContext } from 'react'

import { FunctionContext } from '../../context/context'
import Timer from '../Timer/timer'
import EditingForm from '../EditingForm/editingForm'
import './task.css'

export default function Task({ name, id, active, isEdit, creationTime, hidden, timer }) {
  const { onDeleteTask, onChangeActive, onEdit } = useContext(FunctionContext)

  let activityClass = isEdit ? 'editing' : active ? 'active' : 'completed'
  hidden ? (activityClass += ' hidden') : null

  const sinceCreation = formatDistanceToNow(creationTime, {
    includeSeconds: true,
    addSuffix: true,
  })

  return (
    <li className={activityClass}>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={() => onChangeActive(id)} />
        <label>
          <span className="title">{name}</span>
          {(timer && <Timer timer={timer} active={active} isEdit={isEdit} />) || null}
          <span className="description">created {sinceCreation}</span>
        </label>
        <button className="icon icon-edit" onClick={() => onEdit(id)}></button>
        <button className="icon icon-destroy" onClick={() => onDeleteTask(id)}></button>
      </div>
      {isEdit && <EditingForm id={id} name={name} />}
    </li>
  )
}
