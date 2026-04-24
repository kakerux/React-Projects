import React, { useState } from 'react'

const ZClass7 = () => {
    const [name,setName]=useState("Guest")
    const [age,setAge]=useState(20)
  return (
    <div>
      <input type="text" placeholder='Set Your Name' value={name}/>
      <button onClick={() => setName("Nishant Thakue")}>Set Name</button> 

      <br />
      <input type="text" placeholder='Set Your Age' value={age}/>
      <button onClick={() => setAge(18)}>Set Age</button>

    </div>
  )
}

export default ZClass7
