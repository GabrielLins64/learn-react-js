import React, { Component } from 'react'

export class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  increment() {
    // Won't update DOM
    // this.state.count = this.state.count + 1
    // console.log(this.state.count)

    // Won't work with incrementFive because of React optimizations
    // this.setState({
    //   count: this.state.count + 1
    // }, () => {
    //   console.log('Callback value', this.state.count)
    // })

    this.setState((prevState, props) => ({
      count: prevState.count + 1
    }))
    console.log(this.state.count)
  }

  incrementFive() {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }

  render() {
    return (
      <div>
        <p>Count - {this.state.count}</p>
        <button onClick={() => this.incrementFive()}>
          Increment
        </button>
      </div>
    )
  }
}

export default Counter