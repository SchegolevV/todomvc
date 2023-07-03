import React from 'react';

const TasksFilter = () => {
    return (
        <ul className="filters">
            <li>
                <button className="selected">all</button>
            </li>
            <li>
                <button>active</button>
            </li>
            <li>
                <button>completed</button>
            </li>
        </ul>
    );
};

export default TasksFilter;
