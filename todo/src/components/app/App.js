// Хороший компонент - независимый компонент

import React, {Component} from 'react';
import AppHeader from "../app-header";
import SearchInput from "../search-input";
import TaskList from "../task-list";

import './app.css'
import StatusFilter from "../status-filter";

class App extends Component {
    state = {
        tasks:[
            {id :1, text:'Buy bread'},
            {id :2, text:'Buy notebook'},
            {id :3, text:'Send homework nakonec to'},
            {id :4, text:'Do homework'}
        ]
    }
    deleteItem = (id)=>{
       this.setState(({tasks})=> {
           const index = tasks.findIndex((e) => e.id === id)
           const newList = [...tasks.slice(0, index),
               ...tasks.slice(index+1)]
           return{
               tasks: newList
           }
       })
    }
    render() {
        return(
            <>
                <div className='app-todo'>
                    <AppHeader/>

                    <div className='top-panel d-flex'>
                        <SearchInput placeText={"Search"}/>
                        <StatusFilter text="All" active={true}/>
                        <StatusFilter text="Active"/>
                        <StatusFilter text="Done"/>
                    </div>

                    <TaskList
                        tasks={this.state.tasks}
                        onDeleted = {this.deleteItem}
                    />
                </div>

            </>
        )
    }
}

export  default App