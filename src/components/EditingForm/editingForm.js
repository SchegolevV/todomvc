import { useState, useContext } from 'react'

import { FunctionContext } from '../../context/context'

export default function EditingForm({ id, name }) {
  const [label, setLabel] = useState(name)
  const { submitEdit } = useContext(FunctionContext)

  const onLabelChange = (e) => {
    setLabel(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (label.trim() === '') {
      submitEdit(id, name)
    }
    submitEdit(id, label)
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" className="edit" defaultValue={label} onChange={onLabelChange} />
    </form>
  )
}
