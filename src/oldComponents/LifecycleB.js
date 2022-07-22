import React, { Component } from 'react'

class LifecycleB extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Vishwas'
    }
    console.log('LcB constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LcB getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('LcB componentDidMount')
  }

  shouldComponentUpdate() {
    console.log('LcB shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LcB getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate() {
    console.log('LcB componentDidUpdate')
  }
  
  render() {
    console.log('LcB render')
    return (
      <div>LifecycleB</div>
    )
  }
}

export default LifecycleB