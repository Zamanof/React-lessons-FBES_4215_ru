import React from 'react';
import {Route, Routes} from "react-router-dom";
import {CardPage, HomePage} from "../pages";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/card' element={<CardPage/>}/>
            </Routes>

        </div>
    );
};

export default App;