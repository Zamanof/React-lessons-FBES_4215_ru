import React from "react";
import './task-list-item.css'
const TaskListItem = ({text, isComplete})=>{
    const itemStyle = {
        textDecoration: isComplete ? 'line-through' : 'none'
    }
    return (<span className="todo-list-item">
        <span
            className='todo-list-item-text'
            style={itemStyle}
        >
            {text}
        </span>
    </span>
    )
}

export default TaskListItem