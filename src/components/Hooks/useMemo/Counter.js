import React, { useMemo, useState } from 'react'

function Counter() {
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)

  const increment1 = () => {
    setCounter1(counter1 + 1)
  }

  const increment2 = () => {
    setCounter2(counter2 + 1)
  }

  // Avoid re-rendering everything when counter2 updates
  const isEven = useMemo(() => {
    let i = 0
    while (i < 2000000000) i++
    return counter1 % 2 === 0
  }, [counter1])

  return (
    <div>
      <div>
        <button onClick={increment1}>
          Counter 1 - {counter1}
        </button>
        <span>{isEven ? 'Even' : 'Odd'}</span>
      </div>
      <div>
        <button onClick={increment2}>
          Counter 2 - {counter2}
        </button>
      </div>
    </div>
  )
}

export default Counter