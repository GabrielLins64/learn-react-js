import React, { Component } from 'react'

export class ClassTimer extends Component {
  interval
  constructor(props) {
    super(props)

    this.state = {
      timer: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({ timer: prevState.timer + 1 }))
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <>
        <div>ClassTimer - {this.state.timer}</div>
        <button onClick={() => clearInterval(this.interval)}>Clear</button>
      </>
    )
  }
}

export default ClassTimer