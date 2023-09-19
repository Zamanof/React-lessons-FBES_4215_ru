
import TaskListItem from "../task-list-item";
import './task-list.css'

import React, {Component} from 'react';

class TaskList extends Component {
    render() {
        const elements = this.props.tasks.map((item)=>{
            const {id, ...itemProps} = item
            return <li key={id} className="list-group-item">
                <TaskListItem {...itemProps}
                />
            </li>
        })
        return(
            <ul className="list-group list-todo">
                {elements}
            </ul>
        )
    }
}

export default TaskList