import React, { useState } from 'react'
import './addUser.css'
import { collection, getDoc, query, where } from 'firebase/firestore'
import { db } from '../../../../lib/firebase'
const AddUser = () => {
const [user,setUser] = useState(null)
  const handleSearch = async e=>{
    e.preventDefault()
    const formData = new FormData(e.target)
    const username = formData.get("user")

    try{
  const userRef = collection(db, "users");
  const q = query(userRef, where("username", "==", username));

  const querySnapShot = await getDoc(q)
  if(!querySnapShot.empty){
setUser(querySnapShot.docs[0].data())
  }
    }catch(err){
console.log(err)
    }
  }
  return (
    <div className='addUser'>
      <form onSubmit={handleSearch}>
        <input placeholder='Username' name='username' type="text" />
        <button>Search</button>
      </form>

      {user &&  <div className="user">
        <div className="detail">
          <img src={user.avatar || "./avatar.png"} alt="" />
          <span>{user.user.name}</span>
        </div>
        <button>Add User</button>
      </div>}
    </div>
  )
}

export default AddUser
