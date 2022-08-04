import React, { useEffect, useState } from 'react';
import '../src/App.css';
import UserFrom from './component/UserFrom';
const URL = "https://rest-api-without-db.herokuapp.com/users/"
const App = () => {
  const [users, setUsers] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  //update
  const [selectedUser, setSelectedUser]=useState({
    username:'',
    email:''
  })
  const [updateFlag, setUpdateFlag] = useState(false)
  const [selectedUserid, setSelectedUserid] = useState('');
  const getAllUsers=()=>{
    fetch(URL)
    .then((res)=>{
      if(!res.ok){
        throw Error("could not fatch")
      }return res.json()
    })
    .then((data)=>{
      setUsers(data.users)
     
    
    })
    .catch((err)=>{
        setError(err.message)
    })
    .finally(()=>{
      setisLoading(false)
    })
  }

  useEffect(()=>{
    getAllUsers()
  }, [])

  //Delte users
const handleDelete=(id)=>{
  fetch(URL + `/${id}`,{
    method:"DELETE",
  })

  .then((res)=>{
    if(!res.ok){
      throw Error("could not Delete")
    }
    getAllUsers()
  })
  .catch((err)=>{
      setError(err.message)
  })
}

const addUser=(user)=>{
  fetch(URL,{
    method:"POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(user)
   
  })

  .then((res)=>{
    if(res.status===201){
      getAllUsers()
    }else{
      throw Error("could not create data")
    }
  })
  .catch((err)=>{
      setError(err.message)
  })
}
const handleEdit=(id)=>{
  setSelectedUserid(id);
  setUpdateFlag(true);
  const filtedData = users.filter((user)=>user.id ===id);
  setSelectedUser({
    username:filtedData[0].username,
    email:filtedData[0].email
  })
}
  const handleUpdate=(user)=>{
    fetch(URL+ `/${selectedUserid}`,{
      method:"PUT",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then((res)=>{
      if(!res.ok){
        throw Error("could not Update data")
      }
      getAllUsers()
      setUpdateFlag(false)
    })
    .catch((err)=>{
        setError(err.message)
    })
  }
    return (
      <div className='App'>
      <h1 className='heading'>USER CRUD APP</h1>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {updateFlag ? <UserFrom btText="Update User" selectedUser={selectedUser} handleSubmitData={handleUpdate}></UserFrom> : <UserFrom btText="Add User" handleSubmitData={addUser}></UserFrom>}
      <section>
      {
        users && users.map((user)=>{
          const {id,username,email} = user;
          return(
            <article key={id} className="card-app">
              <p>{username}</p>
              <p>{email}</p>
              <button className='edit-btn' onClick={()=>handleEdit(id)}>Edit</button>
              <button className='delete-btn' onClick={()=>handleDelete(id)}>Delete</button>
            </article>
          )
        })
      }
      </section>
      </div>
    );
  };
  
  export default App;