import { useState } from 'react'

export default function NewTaskForm({ onAddTask }) {
  const [label, setLabel] = useState('')
  const [min, setMin] = useState('')
  const [sec, setSec] = useState('')

  function onChangeLabel(e) {
    setLabel(e.target.value)
  }

  const onMinChange = (e) => {
    setMin(e.target.value)
  }
  const onSecChange = (e) => {
    setSec(e.target.value)
  }

  const submitTask = (e) => {
    e.preventDefault()
    if (!label.trim()) return

    const timer = min * 60000 + sec * 1000
    onAddTask(label, timer)
    setLabel('')
    setMin('')
    setSec('')
  }
  return (
    <form className="new-todo-form" onSubmit={submitTask}>
      <input
        className="new-todo"
        type="text"
        placeholder="What's need to be done"
        onChange={onChangeLabel}
        value={label}
      />
      <input className="new-todo-form__timer" onChange={onMinChange} placeholder="Min" value={min} />
      <input className="new-todo-form__timer" onChange={onSecChange} placeholder="Sec" value={sec} />
      <button type="submit" />
    </form>
  )
}
