import React from 'react'
// import ComponentC from './UglyWay/ComponentC'
import ComponentC from './SimpleWay/ComponentC'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function ContextTests() {
  return (
    <UserContext.Provider value={'Vishwas'}>
      <ChannelContext.Provider value={'Codevolution'}>
        <ComponentC />
      </ChannelContext.Provider>
    </UserContext.Provider>
  )
}

export default ContextTests