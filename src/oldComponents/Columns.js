import React from 'react'

function Columns(props) {
  var items = props.items

  return (
    <>
      {
        items.map(item => (
          <React.Fragment key={item.id}>
            <td>{item.name}</td>
          </React.Fragment>
        ))
      }
    </>
  )
}

export default Columns