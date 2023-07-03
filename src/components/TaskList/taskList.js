import React from "react";
import Task from "../Task/task";

const TaskList = ({className, taskProps}) => {
    let tasks = taskProps.map((props) => {
        console.log(props)
        return <Task {...props}/>
    });
    return (
        <ul className={className}>
            {tasks}
        </ul>
    );
}

export default TaskList;