import React, { Component } from 'react'

class ClassCounter2 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      name: ''
    }
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`
  }

  componentDidUpdate(prevProps, prevState) {
    // Without this If, the title would update for every
    // inserted character in the unrelated state.name
    // attribute.
    if (prevState.count !== this.state.count) {
      console.log('ComponentDidUpdate called!')
      document.title = `Clicked ${this.state.count} times`
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Clicked {this.state.count} times
        </button>
      </div>
    )
  }
}

export default ClassCounter2