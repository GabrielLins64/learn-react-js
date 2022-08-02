import React, { useState } from 'react'
// import { Child, MemoizedChild } from './Children'

export const CountContext = React.createContext()
const CountProvider = CountContext.Provider

export const Parent = ({ children }) => {
  const [count, setCount] = useState(0)

  console.log('Parent Render')
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      <CountProvider value={count}>
        {/* <Child /> */}
        {/* <MemoizedChild /> */}
        {children}
      </CountProvider>
    </div>
  )
}
