import React from 'react'
import BadPerformance from './BadPerformance/ParentComponent'
import GoodPerformance from './GoodPerformance/ParentComponent'

// useCallback is a hook that will return a memoized version of the callback
// function that only changes if one of the dependencies has changed.
// It's useful when passing callbacks to optimized child components that
// rely on reference equality to prevent unnecessary renders.

function UseCallbackTests() {
  return (
    <div>
      {/* <BadPerformance /> */}
      <GoodPerformance />
    </div>
  )
}

export default UseCallbackTests