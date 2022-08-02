import React from 'react'

export const Child = ({ name, person }) => {
  console.log("Child Render")
  return (
    <div>Child Component: {name} {person.firstName} {person.lastName}</div>
  )
}

export const MemoizedChild = React.memo(Child)
