import React, { useEffect, useState } from 'react'

const ZClass17apicapture = () => {

    const [user,Setuser]=useState([])

    useEffect(()=>{

      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => Setuser(json))

    },[])

  return (
    <div>
      

      <h1>User Data: </h1>

      {user.map((e)=>(
        <li key={e.id}>{e.id} - {e.name} Email:{e.email}</li>
      ))}
      


    </div>
  )
}

export default ZClass17apicapture
