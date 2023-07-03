import React from "react";
import TasksFilter from "../TasksFilter/tasksFilter";

const Footer = ({count}) => {
    return (
        <footer className="footer">
            <span className="todo-count">{count} items left</span>
            <TasksFilter />
            <button className="clear-completed">clear completed</button>
        </footer>
    )
}

export default Footer;