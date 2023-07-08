import React, { Component } from 'react';
import './task.css';
// import { formatDistanceToNow } from 'date-fns';

export default class Task extends Component {
    render() {
        const { text, deleteItem, onChangeStatus, status, hidden } = this.props;
        let statusClass;
        let editingInput;

        hidden ? (statusClass = status + ' hidden') : (statusClass = status);

        if (status === 'editing') {
            editingInput = (
                <input type="text" className="edit" defaultValue="Editing task" />
            );
        }

        return (
            <li className={statusClass}>
                <div className="view">
                    <input className="toggle" type="checkbox" onChange={onChangeStatus} />
                    <label>
                        <span className="description">{text}</span>
                        <span className="created"></span>
                    </label>
                    <button className="icon icon-edit">edit</button>
                    <button className="icon icon-destroy" onClick={deleteItem}>
                        delete
                    </button>
                </div>
                {editingInput}
            </li>
        );
    }
}
