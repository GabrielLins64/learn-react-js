import React from 'react'

export const Child = ({ name }) => {
  console.log("Child Render")
  return (
    <div>Child Component: {name}</div>
  )
}

export const MemoizedChild = React.memo(Child)
