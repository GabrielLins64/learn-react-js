import React, { Component } from 'react'
import ComponentC from './ComponentC'
import { UserProvider } from './userContext'

class ReactContext extends Component {
  render() {
    return (
      <UserProvider value='Vishwas'>
        <ComponentC />
      </UserProvider>
    )
  }
}

export default ReactContext