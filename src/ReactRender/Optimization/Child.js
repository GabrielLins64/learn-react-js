import React from 'react'

export const Child = () => {
  // When a parent component renders, React will recursively render
  // all of its child components, even if the state of those hasn't
  // changed.
  console.log("Child Render")
  
  return (
    <div>Child Component</div>
  )
}
