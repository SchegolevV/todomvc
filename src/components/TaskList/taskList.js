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
        const { className, taskProps, onDelete, onEdit, onChangeStatus} = this.props

        let tasks = taskProps.map((props) => {
            return (
                <Task
                    {...props}
                    onDelete={() => onDelete(props.key)}
                    onEdit={() => onEdit(props.key)}
                    onChangeStatus={() => onChangeStatus(props.key)}
                />
            );
        });
        return <ul className={className}>{tasks}</ul>;
    }
}
