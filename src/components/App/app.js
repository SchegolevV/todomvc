import { useState, useRef } from 'react'

import { FunctionContext } from '../../context/context'
import NewTaskForm from '../NewTaskForm/newTaskForm'
import TaskList from '../TaskList/taskList'
import Footer from '../Footer/footer'

export default function App() {
  const [taskData, setTaskData] = useState([])
  const startID = useRef(0)

  const createNewTask = (task, timer) => {
    return {
      name: task,
      id: startID.current++,
      creationTime: new Date(),
      active: true,
      isEdit: false,
      hidden: false,
      timer: timer,
    }
  }
  const onAddTask = (task, timer = null) => {
    const newTask = createNewTask(task, timer)
    setTaskData((taskData) => [...taskData, newTask])
  }
  const onDeleteTask = (id) => {
    const toDelete = taskData.find((task) => task.id === id)
    setTaskData((taskData) => taskData.filter((task) => task !== toDelete))
  }

  const onChangeActive = (id) => {
    const changedTask = taskData.find((task) => task.id === id)
    const newData = taskData.map((task) => {
      if (task.isEdit) {
        return task === changedTask ? { ...task, active: true, isEdit: false } : task
      } else {
        return task === changedTask ? { ...task, active: !task.active } : task
      }
    })
    setTaskData(newData)
  }

  const onEdit = (id) => {
    const changedTask = taskData.find((task) => task.id === id)
    const newData = taskData.map((task) => (task === changedTask ? { ...task, isEdit: !task.isEdit } : task))
    setTaskData(newData)
  }

  const submitEdit = (id, edits) => {
    const oldItem = taskData.find((task) => task.id === id)
    setTaskData((taskData) =>
      taskData.map((task) => (task === oldItem ? { ...task, name: edits, isEdit: false } : task))
    )
  }

  const clearCompleted = () => {
    let activeTasks = taskData.filter((task) => task.active)
    setTaskData(activeTasks)
  }

  const filterTask = (filter) => {
    if (filter === 'all') {
      setTaskData((taskData) =>
        taskData.map((task) => {
          return { ...task, hidden: false }
        })
      )
    } else if (filter === 'active') {
      setTaskData((taskData) =>
        taskData.map((task) => (task.active ? { ...task, hidden: false } : { ...task, hidden: true }))
      )
    } else if (filter === 'completed') {
      setTaskData((taskData) =>
        taskData.map((task) => (task.active ? { ...task, hidden: true } : { ...task, hidden: false }))
      )
    }
  }

  let activeCount = taskData.filter((task) => task.active).length

  return (
    <section className="todoapp">
      <FunctionContext.Provider value={{ onDeleteTask, onChangeActive, onEdit, submitEdit }}>
        <header className="header">
          <h1>Todos</h1>
          <NewTaskForm autofocus={true} onAddTask={onAddTask} />
        </header>
        <section className="main">
          <TaskList taskData={taskData} />
          <Footer count={activeCount} clearCompleted={clearCompleted} filterTask={filterTask} />
        </section>
      </FunctionContext.Provider>
    </section>
  )
}
