import React from 'react'
import ErrorBoundary from './ErrorBoundary'
import Hero from './Hero'

function EBoundDemo() {
  return (
    <>
      <ErrorBoundary>
        <Hero heroName='Dr. Strange' />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName='Black Panther' />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName='Ultron' />
      </ErrorBoundary>
    </>
  )
}

export default EBoundDemo