import React, { useState } from 'react'

export const GrandParent = ({ children }) => {
  const [newCount, setNewCount] = useState(0)

  console.log('Grandparent Render')
  return (
    <div>
      <button onClick={() => setNewCount((nc) => nc + 1)}>GP Count: {newCount}</button>
      {/* <Parent>
        <Child />
      </Parent> */}
      {children}
    </div>
  )
}
