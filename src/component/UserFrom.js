import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useEffect } from 'react'

function UserFrom({handleSubmitData,selectedUser, btText}) {
    const [users,setUsers]= useState({
        username:"",
        email:""
    })
    const {username, email} = users
const handleChange=(e)=>{
    const selectedField = e.target.name;
    const selectedValue = e.target.value;
    setUsers(prevState=>{
        return{...prevState,[selectedField]:selectedValue}

    })
}

const handleSubmit=(e)=>{
    e.preventDefault()
    handleSubmitData(users);
    setUsers({
        username:"",
        email:""
    })
}

useEffect(()=>{
    setUsers({
        username: selectedUser.username,
        email: selectedUser.email
    })
},[selectedUser])

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">UserName:</label>
            <input type="text" name='username' id='username' placeholder='Enter your name' value={username} onChange={handleChange}  required />
        </div>
        <div>
            <label htmlFor="email">UserEmail:</label>
            <input type="email" name='email' id='email' placeholder='Enter your Email' value={email} onChange={handleChange}  />
        </div>
        <button type='submit' className='add-btn'>{btText}</button>
    </form>
  )
}

UserFrom.defaultProps = {
    selectedUser:{
        username:'',
        email:''
    }
}

export default UserFrom
