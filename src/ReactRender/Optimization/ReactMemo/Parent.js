import React, { useState } from 'react'
import { MemoizedChild } from './Child'
// import { Child } from './Child'

export const Parent = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Vishwas')

  console.log('Parent Render')
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      <button onClick={() => setName('Codevolution')}>Change name</button>
      {/* <Child name={name} /> */}
      <MemoizedChild name={name} />
    </div>
  )
}
