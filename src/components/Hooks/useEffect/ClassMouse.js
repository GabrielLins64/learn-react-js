import React, { Component } from 'react'

export class ClassMouse extends Component {
  constructor(props) {
    super(props)

    this.state = {
      x: 0,
      y: 0,
    }
  }

  logMousePostition = e => {
    this.setState({ x: e.clientX, y: e.clientY })
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.logMousePostition)
  }

  // Unregister the EL when the component is unmounted (prevent memory leaks)
  componentWillUnmount() {
    window.removeEventListener('mousemove', this.logMousePostition)
  }

  render() {
    return (
      <div>
        X - {this.state.x} Y - {this.state.y}
      </div>
    )
  }
}

export default ClassMouse