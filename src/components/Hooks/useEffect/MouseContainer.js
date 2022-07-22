import React, { useState } from 'react'
import HookMouse2 from './HookMouse2'

function MouseContainer() {
  const [display, setDisplay] = useState(true)
  
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>
        Toggle display
      </button>
      {display && <HookMouse2 />}
    </div>
  )
}

export default MouseContainer