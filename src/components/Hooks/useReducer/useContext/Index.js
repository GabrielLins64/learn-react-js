import React, { useReducer } from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'

export const CountContext = React.createContext()

const initialState = 0
const reducer = (currentState, action) => {
  switch (action) {
    case 'increment':
      return currentState + 1
    case 'decrement':
      return currentState - 1
    case 'reset':
      return initialState
    default:
      return currentState
  }
}

function ReducerWithContext() {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <CountContext.Provider
      value = {{
        countState: count,
        countDispatch: dispatch
      }}
    >
      <div>
        [Index] Count: {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  )
}

export default ReducerWithContext