import React, { useEffect, useState } from 'react'

function HookMouse2() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = e => {
    setX(e.clientX)
    setY(e.clientY)
  }

  // Only called once, since we passed [] as second parameter
  useEffect(() => {
    console.log('useEffect called!')
    window.addEventListener('mousemove', logMousePosition)

    // This 'return' below specifies the cleaning (unmounting)
    // method for this effect (prevents memory leaks).
    return () => {
      console.log('Component unmounting code')
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, [])

  return (
    <div>
      X - {x} Y - {y}
    </div>
  )
}

export default HookMouse2