import React from 'react'
import { Child } from './Children'
import { Parent } from './Parent'

export const ContextExample = () => {
  return (
    <div>
      <Parent>
        <Child />
      </Parent>
    </div>
  )
}
