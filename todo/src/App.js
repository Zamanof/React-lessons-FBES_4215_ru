// Хороший компонент - независимый компонент

import React from "react";
import AppHeader from "./components/app-header";
import SearchInput from "./components/search-input";
import TaskList from "./components/task-list";
const App = ()=>{
    const tasks = [
        {text:'Buy bread', isComplete:true},
        {text:'Buy notebook', isComplete:false},
        {text:'Send homework nakonec to', isComplete:true},
        {text:'Do homework', isComplete:false}

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