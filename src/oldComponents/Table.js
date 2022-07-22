import React from 'react'
import Columns from './Columns'

function Table() {
  const items = [
    {
      id: 1,
      name: 'name'
    },
    {
      id: 2,
      name: 'john'
    },
    {
      id: 3,
      name: 'kelly'
    },
  ]

  return (
    <table>
      <tbody>
        <tr>
          <Columns items={items} />
        </tr>
      </tbody>
    </table>
  )
}

export default Table