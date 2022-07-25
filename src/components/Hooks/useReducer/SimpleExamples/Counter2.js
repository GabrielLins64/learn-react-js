import React, { useReducer, useState } from 'react'

const initialState = {
  firstCounter: 0,
  secondCounter: 0,
}

const reducer = (state, action) => {
  let newState = {...state}
  switch (action.type) {
    case 'increment':
      newState[action.counter] = state[action.counter] + parseInt(action.value)
      return newState
    case 'decrement':
      newState[action.counter] = state[action.counter] - parseInt(action.value)
      return newState
    case 'reset':
      newState[action.counter] = initialState[action.counter]
      return newState
    default:
      return state
  }
}

function Counter2() {
  const [incValue, setIncValue] = useState(1)
  const [incCounterOne, setIncCounterOne] = useState(true)
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <div>First counter: {count.firstCounter}</div>
      <div>Second counter: {count.secondCounter}</div>
      <input type="numer" value={incValue} onChange={e => { setIncValue(e.target.value) }} />
      <button onClick={() => dispatch({
        type: 'increment',
        value: incValue,
        counter: incCounterOne ? 'firstCounter' : 'secondCounter'
      })}>Increment</button>
      <button onClick={() => dispatch({
        type: 'decrement',
        value: incValue,
        counter: incCounterOne ? 'firstCounter' : 'secondCounter'
      })}>Decrement</button>
      <button onClick={() => dispatch({
        type: 'reset',
        value: incValue,
        counter: incCounterOne ? 'firstCounter' : 'secondCounter'
      })}>Reset</button>
      <button onClick={() => setIncCounterOne(!incCounterOne)}>Counter {incCounterOne ? ' 1' : ' 2'}</button>
    </div>
  )
}

export default Counter2