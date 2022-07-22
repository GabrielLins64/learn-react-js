import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

export class ComponentE extends Component {

  static contextType = UserContext // same as line 20
  
  render() {
    return (
      <div>
        Component E context: {this.context}
        <ComponentF />
      </div>
    )
  }
}

// For using userContext in this component E (not mandatory for using in F)
// ComponentE.contextType = UserContext

export default ComponentE