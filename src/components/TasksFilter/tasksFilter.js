// import { useRef } from 'react'

const TasksFilter = ({ filterTask }) => {
  return (
    <ul className="filters">
      <li>
        <button onClick={() => filterTask('all')}>all</button>
      </li>
      <li>
        <button onClick={() => filterTask('active')}>active</button>
      </li>
      <li>
        <button onClick={() => filterTask('completed')}>completed</button>
      </li>
    </ul>
  )
}

export default TasksFilter
