import React, { useState } from 'react'

const ZClass8 = () => {

    const [student,setStudent]=useState({
        name:"Nishant",
        age:44,
        city:"Bhopal"
    })
    const handleCity=()=>{

        setStudent({...student , city:"Bangalore"})
    }

    const [name,setName]=useState("Guest")

  return (
    <div>
      <h1>Name : {student.name}</h1>
      <h1>Age : {student.age}</h1>
      <h1>City : {student.city}</h1>
      <button onClick={handleCity}>Change city</button>
      
      <br />


<input type="text" placeholder='write here' onChange={(e)=>setName(e.target.value)}/>
<h1>Name : {name||"Guest"}</h1>


    </div>
  )
}

export default ZClass8
