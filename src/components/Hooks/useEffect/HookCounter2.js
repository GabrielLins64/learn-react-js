import React, { useEffect, useState } from 'react'

function HookCounter2() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  // The second argument tells React to only call
  // this useEffect if the count state changes.
  useEffect(() => {
    console.log('useEffect called!')
    document.title = `You clicked ${count} times`
  }, [count])

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  )
}

export default HookCounter2