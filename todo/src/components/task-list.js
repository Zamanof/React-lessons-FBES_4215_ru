import React from "react";
import TaskListItem from "./task-list-item";

const TaskList = ({tasks})=>{
    const elements = tasks.map((item)=>{
        return <li>
            <TaskListItem {...item}
            />
        </li>
    })
    return(
        <ul>
            {elements}
        </ul>
    )
}
export default TaskList