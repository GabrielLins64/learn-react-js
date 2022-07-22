import React, { useContext } from 'react'
import { ChannelContext, UserContext } from '../Index.js'

function ComponentF() {
  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)
  
  return (
    <div>
      ComponentF: User context ({user}), Channel context ({channel}).
    </div>
  )
}

export default ComponentF