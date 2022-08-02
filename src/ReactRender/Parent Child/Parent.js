import React, { useState } from 'react'
import { Child } from './Child'

export const Parent = () => {
  const [count, setCount] = useState(0)

  // Attempts to setCount for the same state twice won't re-render the component.
  // New state same as old state after initial render? Both parent and child do
  // not re-render.
  // New state same as old state after re-renders? Parent re-renders one more
  // more time for "safety" but child never re-renders.
  console.log('Parent Render')
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      <button onClick={() => setCount(0)}>Count to 0</button>
      <button onClick={() => setCount(5)}>Count to 5</button>
      <Child />
    </div>
  )
}
