import React from 'react';
import { formatDistanceToNow } from 'date-fns';

const Task = ({status = 'active'}) => {
    let editingInput;
    if (status === 'editing') {
       editingInput = <input type="text" className="edit" defaultValue="Editing task"/>;
    }
    let creationDate = new Date();
    const sinceCreation = formatDistanceToNow(creationDate, {
        includeSeconds: true
    })

    return (
        <li className={status}>
            <div className="view">
                <input className="toggle" type="checkbox" />
                <label>
                    <span className='description'>{status} task</span>
                    <span className='created'></span>
                </label>
                <button className='icon icon-edit'></button>
                <button className='icon icon-destroy'></button>
            </div>
            {editingInput}
        </li>
    );
};

export default Task;
