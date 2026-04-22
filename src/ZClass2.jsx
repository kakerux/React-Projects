import { list } from 'postcss'
import React from 'react'

const ZClass2 = () => {

    const fruits = ["Apple" , "Banana" , "Orange" , "Kartik" ]

    const user=[{username: "nishant",age:100,lastname: "thakur"},
      {username: "ryukendo",age:34, lastname:"kumar"},
      {username:"salman",age:23,lastname:"khan"}
    ]

    const userObj=(user)=>{
        return user.username + " " + user.lastname
    }
  return (
    <div>
      <h1>Fruits Name:</h1>
      <ul>
        {fruits.map((fruit,index)=>(
           <li> {index} - {fruit} </li>
         ))}
      </ul>
      <br />

      <h1>User :</h1>
      <ul>

        {/* this is withour arrayoobj */}
        {/* <li>Name:{user.username}</li>
        <li>LastName:{user.lastname}</li> */}

        {/* <li>Name : {userObj(user)}</li>

        <li>Age:{user.age}</li> */}

        {user.map((user,index)=>(
          <>
          <li>{index} --  Name: {userObj(user)} and he is {user.age} years old.</li>
          <li>{user.username}</li>
          </>
        ))}

        <li>{user[0].username}</li>



      </ul>
    </div>
  )
}

export default ZClass2
