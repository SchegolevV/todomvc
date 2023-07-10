import React, { Component } from 'react';
import EditingForm from '../EditingForm/editingForm';
import './task.css';

import { formatDistanceToNow } from 'date-fns';

export default class Task extends Component {
    render() {
        const { text, onDelete, onEdit, onChangeStatus, status, hidden, time } =
            this.props;

        let statusClass;
        let editingForm;
        console.log();

        hidden ? (statusClass = status + ' hidden') : (statusClass = status);

        if (status === 'editing') {
            editingForm = <EditingForm text={text} />;
        }

        const timeSinceCreation = formatDistanceToNow(time, {
            includeSeconds: true,
            addSuffix: true,
        });

        return (
            <li className={statusClass}>
                <div className="view">
                    <input className="toggle" type="checkbox" onChange={onChangeStatus} />
                    <label>
                        <span className="description">{text}</span>
                        <span className="created">created {timeSinceCreation}</span>
                    </label>
                    <button className="icon icon-edit" onClick={onEdit}>
                        edit
                    </button>
                    <button className="icon icon-destroy" onClick={onDelete}>
                        delete
                    </button>
                </div>
                {editingForm}
            </li>
        );
    }
}
