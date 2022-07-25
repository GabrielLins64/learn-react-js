import React, { Component } from 'react'
import FetchingData from './FetchingData/Index'
import SimpleExamples from './SimpleExamples/Index'
import ReducerWithContext from './useContext/Index'

class ReducerTests extends Component {
  render() {
    return (
      <>
        {/* <SimpleExamples /> */}
        {/* <ReducerWithContext /> */}
        <FetchingData />
      </>
    )
  }
}

// When to use useState or useReducer
// 
// Scenario                    | useState                | useReducer
// --------------------------- | ----------------------- | ----------
// Type of state               | Number, String, Boolean | Object or Array
// Number of state transitions | 1 or 2                  | Too many
// Related state transitions?  | No                      | Yes
// Business logic              | None                    | Complex
// Local vs global             | Local                   | Global

export default ReducerTests