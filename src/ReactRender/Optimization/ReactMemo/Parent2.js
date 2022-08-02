import React, { useCallback, useMemo, useState } from 'react'
import { MemoizedChild } from './Child2'

export const Parent2 = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Vishwas')

  const person = {
    firstName: 'Tony',
    lastName: 'Stark',
  }

  // eslint-disable-next-line
  const memoizedPerson = useMemo(() => person, [])

  const handleClick = () => {}

  const memoizedHandleClick = useCallback(handleClick, [])
  

  console.log('Parent2 Render')
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      <button onClick={() => setName('Codevolution')}>Change name</button>
      <MemoizedChild name={name} person={memoizedPerson} handleClick={memoizedHandleClick} />
    </div>
  )
}
