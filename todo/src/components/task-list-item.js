import React from "react";

const TaskListItem = ({text, isComplete})=>{
    const itemStyle = {
        color: isComplete ? 'red' : 'black'
    }
    return <span style={itemStyle}>{text}</span>
}

export default TaskListItem