import React from 'react';

const Counter = ({counter, increment, decrement, random}) => {
    return (
        <div>
            <h1 className="counter">
                {counter}
            </h1>
            <button className="dec"
            onClick={decrement}
            >
                Decrement
            </button>
            <button className="inc"
            onClick={increment}
            >
                Increment
            </button>
            <button className="rand"
            onClick={random}
            >
                Random
            </button>
        </div>
    );
};

export default Counter;