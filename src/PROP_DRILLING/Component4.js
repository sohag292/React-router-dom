import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UserContext'
export default function Component4() {
    const user = useContext(UserContext);
    console.log(user);
  return (
    <div>
        <p>{user.id}</p>
        <p>{user.name}</p>
    </div>
  )
}
