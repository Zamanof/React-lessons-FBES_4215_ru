import './task-list-item.css'

import React, {Component} from 'react';

class TaskListItem extends Component {
    render() {

        const itemStyle = {
            textDecoration: this.props.isComplete ? 'line-through' : 'none'
        }
        return (<span className="todo-list-item">
        <span
            className='todo-list-item-text'
            style={itemStyle}
        >
            {this.props.text}
        </span>
    </span>
        )
    }
}

    export
    default
    TaskListItem