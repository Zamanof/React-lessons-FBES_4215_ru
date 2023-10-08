import {createStore} from "redux";

// Action creator
const increment = ()=>({type: 'increment'})
const decrement = ()=>({type: 'decrement'})
const random = (payload)=>({type: 'random', payload})
const reducer = (state = 0, action)=>{
    switch (action.type){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'random':
            return state + action.payload
        default:
            return state
    }
}

// let state = reducer(undefined, {type: 'increment'})
// console.log(state)
// state = reducer(state, {type: 'increment'})
// console.log(state)
// state = reducer(state, {type: 'in'})
// console.log(state)

const store = createStore(reducer)
// store.subscribe(()=>{
//     console.log(store.getState())
// })

// console.log(store.getState())
// store.dispatch({type: 'increment'})
// store.dispatch({type: 'increment'})
// store.dispatch({type: 'increment'})
// store.dispatch({type: 'increment'})
// console.log(store.getState())

document.getElementById('inc')
    .addEventListener('click',()=>{
        store.dispatch(increment())
    })
document.getElementById('dec')
    .addEventListener('click',()=>{
        store.dispatch(decrement())
    })

document.getElementById('rand')
    .addEventListener('click',()=>{
        const payload = Math.floor(Math.random() * 10)
        store.dispatch(random(payload))
    })

const updateCounter = () => {
  document
      .getElementById('counter')
      .innerHTML = store.getState().toString()
}
store.subscribe(updateCounter)