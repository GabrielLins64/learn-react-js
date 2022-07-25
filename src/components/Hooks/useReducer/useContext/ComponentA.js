import React, { useContext } from 'react'
import { CountContext } from './Index'

function ComponentA() {
  const countContext = useContext(CountContext)

  return (
    <div>
      [Component A]: {countContext.countState}&nbsp;
      <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
      <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
      <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentA