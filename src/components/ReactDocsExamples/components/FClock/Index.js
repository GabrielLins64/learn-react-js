import React, { useEffect, useState } from 'react'

var timerID

function FClock() {
  const [title, setTitle] = useState('Clock App')
  const [date, setDate] = useState(new Date())

  const handleUpdateTitle = () => {
    console.log('handleUpdateTitle called!')
    setTitle(title.startsWith('Cl') ? 'CLOCK APP' : 'Clock app')
  }

  const tick = () => {
    // console.log('tick() called!')
    setDate(new Date())
  }

  useEffect(() => {
    console.log('useEffect called!')
    timerID = setInterval(() => tick(), 1000)

    return () => {
      console.log('useEffect clear callback called!')
      clearInterval(timerID)
    }
  }, [])

  return (
    <div>
      <h1>{title}</h1>
      <h2>It is {date.toLocaleTimeString()}</h2>
      <button onClick={handleUpdateTitle}>Update title</button>
    </div>
  )
}

export default FClock