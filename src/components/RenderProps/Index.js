import ClickCounterTwo from './ClickCounterTwo';
import Counter from './Counter';
import HoverCounterTwo from './HoverCounterTwo';
import React from 'react'

export default function RenderProps() {
  return (
    <>
      <Counter
        render={(count, incrementCount) => (
          <ClickCounterTwo
            count={count}
            incrementCount={incrementCount}
          />
        )}
      />
      <Counter
        render={(count, incrementCount) => (
          <HoverCounterTwo
            count={count}
            incrementCount={incrementCount}
          />
        )}
      />
    </>
  )
}
