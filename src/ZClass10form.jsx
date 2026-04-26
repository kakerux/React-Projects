import React, { useState } from 'react'

const ZClass10form = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")

  const  handleSubmit=(e)=>{

    e.preventDefault()
    console.log("Name:", name);
    console.log("Email",email);
    
    
    }


  return (
    <div>
      
      <form action="" onSubmit={handleSubmit}>

        Name: <input type="text" placeholder='Your Name>' value={name} onChange={(e)=>setName(e.target.value)}/>
        Email: <input type="text" placeholder='Your email>' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <button type='submit'>Submit</button>

      </form>


    </div>
  )
}

export default ZClass10form
