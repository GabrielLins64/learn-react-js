import React, { Component } from 'react'

export class EventBind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Hello'
    }
  }

  clickHandler = () => {
    let msg = this.state.message
    
    this.setState({
      message: msg.startsWith('H') ? 'Goodbye!' : 'Hello'
    })
  }
  
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>
          Click
        </button>
      </div>
    )
  }
}

export default EventBind