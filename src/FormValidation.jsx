import React, { useState } from 'react'

const FormValidation = () => {

    const [name,setName]=useState("")
        const [email,setEmail]=useState("")
        const [error,setError]=useState("")
    
      const  handleSubmit=(e)=>{
       e.preventDefault()

       if(!name||!email){
        setError("please fill all the fields")
        alert("Form not submitted")
       }
       else{
        (setError(""))
        alert("Form Submitted")

       } 

        console.log("Name:", name);
        console.log("Email",email); 


        }
  return (
    <div>
      
      <h1>Simple Form Validation </h1>

     <form action="" onSubmit={handleSubmit}>

        Name: <input type="text" placeholder='Your Name>' value={name} onChange={(e)=>setName(e.target.value)}/>
        Email: <input type="text" placeholder='Your email>' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <button type='submit'>Submit</button> <br />
        {error && <p style={{color:"red"}}>{error}</p>}

      </form>

    </div>
  )
}

export default FormValidation
