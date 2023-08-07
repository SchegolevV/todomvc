import Task from '../Task/task'

export default function TaskList({ taskData }) {
  const tasks = taskData.map((props) => {
    return <Task key={props.id} {...props} />
  })
  return <ul className="todo-list">{tasks}</ul>
}
