import NewTaskForm from '../NewTaskForm/newTaskForm'

const Header = ({ article, className, onAdd }) => {
  return (
    <header className={className}>
      <h1>{article}</h1>
      <NewTaskForm type="text" placeholder="What needs to be done?" autofocus={true} onAdd={onAdd} />
    </header>
  )
}

export default Header
