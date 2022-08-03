import React, { useState } from 'react'
import Component2 from './Component2'
import { UserContext } from './UserContext'

export default function Component1() {
    const [user, setUser] = useState({id:101, name:"Anisul islam"})
  return (
    <UserContext.Provider value={{user}}>
        <Component2></Component2>
    </UserContext.Provider>
  )
}

// provider , consumer
