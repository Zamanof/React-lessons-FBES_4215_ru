import React from 'react';
import Counter from "./counter";
const App = ({counter, increment, decrement, random})=> {
    return (
        <Counter
            counter={counter}
            increment={increment}
            decrement={decrement}
            random={()=>{
                const payload = Math.floor(Math.random() * 10)
                random(payload)
            }}
        />
    );
}

export default App;