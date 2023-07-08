import React from 'react';
import TasksFilter from '../TasksFilter/tasksFilter';

const Footer = ({ count, onClearCompleted, onFilterTask }) => {
    return (
        <footer className="footer">
            <span className="todo-count">{count} items left</span>
            <TasksFilter onFilterTask={onFilterTask} />
            <button className="clear-completed" onClick={onClearCompleted}>
                clear
            </button>
        </footer>
    );
};

export default Footer;
