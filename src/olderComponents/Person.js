import React from 'react'

export default function Person({person}) {
  const {name, age, skill} = person
  
  return (
    <div>
      <h2>
        I'm {name}. I'm {age} years old and I know {skill}
      </h2>
    </div>
  )
}
