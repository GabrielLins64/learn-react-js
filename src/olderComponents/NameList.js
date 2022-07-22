import React from 'react'
import Person from './Person'

export default function NameList() {
  const persons = [
    {
      id: 1,
      name: 'Tony',
      age: 35,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Steve', 
      age: 131,
      skill: 'Angular'
    },
    {
      id: 3,
      name: 'Natasha',
      age: 34,
      skill: 'Vue'
    },
  ]
  const nameList = persons.map(person => (
    <Person person={person} key={person.id}/>
  ))

  return (
    <div>{nameList}</div>
  )
}
