import React from 'react'
import { ChannelContext, UserContext } from '../Index.js'

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {user => {
          return (
            <ChannelContext.Consumer>
              {channel => {
                return <div>ComponentF: User context ({user}), Channel context ({channel})</div>
              }}
            </ChannelContext.Consumer>
          )
        }}
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentF