import React from "react";
import TaskListItem from "./task-list-item";

const TaskList = ({tasks})=>{
    const elements = tasks.map((item)=>{
        const {id, ...itemProps} = item
        return <li key={id} >
            <TaskListItem {...itemProps}
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