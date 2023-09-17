// Хороший компонент - независимый компонент

import React from "react";
import AppHeader from "./components/app-header";
import SearchInput from "./components/search-input";
import TaskList from "./components/task-list";
const App = ()=>{
    const tasks = [
        {id :1, text:'Buy bread', isComplete:true},
        {id :2, text:'Buy notebook', isComplete:false},
        {id :3, text:'Send homework nakonec to', isComplete:true},
        {id :4, text:'Do homework', isComplete:false}

    ]
    return(
        <>
            <AppHeader/>
            <SearchInput placeText={"Search"}/>
            <TaskList tasks={tasks}/>
        </>
    )
}

export  default App