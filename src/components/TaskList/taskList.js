import React from "react";
import Task from "../Task/task";

const TaskList = ({className, taskProps, onDelete}) => {
    let tasks = taskProps.map((props) => {
        return <Task {...props} deleteItem={() => onDelete(props.key)}/>
    });
    return (
        <ul className={className}>
            {tasks}
        </ul>
    );
}

export default TaskList;