import React, { Component } from 'react'

export class Clock extends Component {
  constructor(props) {
    super(props)
    console.log('constructor called!')

    this.state = {
      title: 'Clock app',
      date: new Date()
    }
  }

  tick() {
    // console.log('tick called!')
    this.setState({
      date: new Date()
    })
  }

  // If some value isn’t used for rendering or data flow (for example,
  // a timer ID), you don’t have to put it in the state. Such values
  // can be defined as fields on the component instance.
  componentDidMount() {
    // console.log('componentDidMount called!')
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentDidUpdate() {
    // console.log('componentDidUpdate called!')
  }

  componentWillUnmount() {
    // console.log('componentWillUnmount called!')
    clearInterval(this.timerID)
  }

  handleUpdateTitle = () => {
    this.setState({
      title: this.state.title.startsWith('Cl') ? 'CLOCK APP' : 'Clock app'
    })
  }

  render() {
    // console.log('Render called!')
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        <button onClick={this.handleUpdateTitle}>Update title</button>
      </div>
    )
  }
}

export default Clock