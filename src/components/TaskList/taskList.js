import { Component } from 'react'
import PropTypes from 'prop-types'

import Task from '../Task/task'

export default class TaskList extends Component {
  static defaultProps = {
    className: 'ul',
    onEdit: () => {},
    onDelete: () => {},
    onChangeStatus: () => {},
  }

  static propTypes = {
    taskProps: PropTypes.arrayOf(PropTypes.object).isRequired,
    onChangeStatus: PropTypes.func,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
  }

  render() {
    const { className, taskProps, onDelete, onEdit, onChangeStatus, onSubmitEdit } = this.props

    let tasks = taskProps.map((props) => {
      return (
        <Task
          {...props}
          id={props.id}
          key={props.id}
          onDelete={() => onDelete(props.id)}
          onEdit={() => onEdit(props.id)}
          onSubmitEdit={onSubmitEdit}
          onChangeStatus={() => onChangeStatus(props.id)}
        />
      )
    })
    return <ul className={className}>{tasks}</ul>
  }
}
