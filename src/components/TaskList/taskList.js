import React, { Component } from 'react';
import Task from '../Task/task';
import PropTypes from 'prop-types'

export default class TaskList extends Component {

    static defaultProps = {
        className: 'ul',
        onEdit: () => {},
        onDelete: () => {},
        onChangeStatus: () => {}
    }

    static propTypes = {
        taskProps: PropTypes.arrayOf(PropTypes.object).isRequired,
        onChangeStatus: PropTypes.func,
        onEdit: PropTypes.func,
        onDelete: PropTypes.func,
    }

    render() {
        const { className, taskProps, onDelete, onEdit, onChangeStatus, onSubmitEdit} = this.props

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
            );
        });
        return <ul className={className}>{tasks}</ul>;
    }
}
