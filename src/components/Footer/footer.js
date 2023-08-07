// import PropTypes from 'prop-types'

import TasksFilter from '../TasksFilter/tasksFilter'

const Footer = ({ count, clearCompleted, filterTask }) => {
  // Footer.propTypes = {
  //   count: PropTypes.number.isRequired,
  //   onFilterTask: PropTypes.func.isRequired,
  //   onClearCompleted: PropTypes.func.isRequired,
  // }

  return (
    <footer className="footer">
      <span className="todo-count">{count + ' items left'}</span>
      <TasksFilter filterTask={filterTask} />
      <button className="clear-completed" onClick={clearCompleted}>
        clear
      </button>
    </footer>
  )
}

export default Footer
