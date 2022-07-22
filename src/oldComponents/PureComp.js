import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    // Pure Components implements shouldComponentUpdate with a
    // shallow prop and state comparison. I.E., if the component
    // doesn't update its state, it won't be updated, even if
    // its predecessors are.
    console.log('PureComp Render');

    return (
      <div>PureComp {this.props.name}</div>
    )
  }
}

export default PureComp