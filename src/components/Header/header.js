import NewTaskForm from '../NewTaskForm/newTaskForm'

const Header = ({ article, className, onAdd }) => {
  return (
    <header className={className}>
      <h1>{article}</h1>
      <NewTaskForm autofocus={true} onAdd={onAdd} />
    </header>
  )
}

export default Header
