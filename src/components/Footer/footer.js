import React from 'react';
import TasksFilter from '../TasksFilter/tasksFilter';
import PropTypes from 'prop-types';

const Footer = ({ count, onClearCompleted, onFilterTask }) => {

    Footer.propTypes = {
        count: PropTypes.number.isRequired,
        onFilterTask: PropTypes.func.isRequired,
        onClearCompleted: PropTypes.func.isRequired
    }

    return (
        <footer className="footer">
            <span className="todo-count">{count + ' items left'}</span>
            <TasksFilter onFilterTask={onFilterTask} />
            <button className="clear-completed" onClick={onClearCompleted}>
                clear
            </button>
        </footer>
    );
};

export default Footer;
