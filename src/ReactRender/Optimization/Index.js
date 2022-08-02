import React from 'react'
import { Child } from './Child'
import { GrandParent } from './GrandParent'
import { Parent } from './Parent'

export const OptimalParentChild = () => {
  return (
    <div>
      <GrandParent>
        <Parent>
          <Child />
        </Parent>
      </GrandParent>
    </div>
  )
}
