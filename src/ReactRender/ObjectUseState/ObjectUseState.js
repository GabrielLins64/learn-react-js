import React, { useState } from 'react'

const initialState = {
  firstName: 'Steve',
  lastName: 'Rogers',
}

export const ObjectUseState = () => {
  const [person, setPerson] = useState(initialState)

  const changeName = () => {
    // Wrong:
    // person.firstName = 'Tony'
    // person.lastName = 'Stark'
    // setPerson(person)

    // Correct:
    // const newPerson = {...person}
    // newPerson.firstName = 'Tony'
    // newPerson.lastName = 'Stark'
    // setPerson(newPerson)

    // Even better:
    setPerson({
      ...person,
      firstName: 'Tony',
      lastName: 'Stark',
    })
  }

  console.log('ObjectUseState Render')
  return (
    <div>
      <div>
        <p>Person: {person.firstName} {person.lastName}</p>
      </div>
      <button onClick={changeName}>Change name</button>
    </div>
  )
}
