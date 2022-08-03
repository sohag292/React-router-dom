import React from 'react'
import { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom'
export default function User() {
    const {userId} = useParams();
    const [searchParams, setSearchParams] = useSearchParams()
    const [name, SetName]= useState("")
    const handleSubmit=(e)=>{
        e.preventDefault();
        setSearchParams({name:name})
        SetName('')
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>User:</h1>
            <input type="text" value={name} onChange={(e)=>{SetName(e.target.value)}} />
            <button type='submit'>Find User</button>
      </form>

        {/* User
        <h1>{searchParams.get("id")}</h1>
        <h1>{searchParams.get("age")}</h1>
        <h1>{searchParams.get("name")}</h1> */}
    </div>
  )
}
