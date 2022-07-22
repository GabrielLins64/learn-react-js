import React, { Component } from 'react'
import { UserConsumer } from './userContext'

export class ComponentF extends Component {
  render() {
    return (
      // <UserConsumer> For using userContext in this component F*/
      <UserConsumer>
        {(username) => {
          return <div>Component F context: {username}</div>
        }}
      </UserConsumer>
    )
  }
}

export default ComponentF