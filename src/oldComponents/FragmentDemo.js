import React from 'react'

function FragmentDemo() {
  return (
    // <React.Fragment>
    <> {/* React's shortcut for Fragment */}
      <h1>
        FragmentDemo
      </h1>
      <p>JSX expressions must have one parent element.</p>
    </>
    // </React.Fragment>
  )
}

export default FragmentDemo