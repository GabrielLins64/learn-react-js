import React, { useReducer } from 'react'

const initialState = 0

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

export const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState)

  // Not working in React 18 anymore (https://github.com/facebook/react/pull/22445)
  // I.e., reset clicks will always re-render the component.
  console.log('UseReducer render')
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}
