import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Vishwas'
    }
    console.log('LcA constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LcA getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('LcA componentDidMount')
  }

  shouldComponentUpdate() {
    console.log('LcA shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LcA getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate() {
    console.log('LcA componentDidUpdate')
  }

  changeState = () => {
    this.setState({
      name: 'Codevolution'
    })
  }

  render() {
    console.log('LcA render')
    return (
      <>
        <div>LifecycleA</div>
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB />
      </>
    )
  }
}

export default LifecycleA