import React from 'react';

const TasksFilter = ({ onFilterTask }) => {
    return (
        <ul className="filters">
            <li>
                <button onClick={onFilterTask} value="all">
                    all
                </button>
            </li>
            <li>
                <button onClick={onFilterTask} value="active">
                    active
                </button>
            </li>
            <li>
                <button onClick={onFilterTask} value="completed">
                    completed
                </button>
            </li>
        </ul>
    );
};

export default TasksFilter;
