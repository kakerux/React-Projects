import React, { useState } from 'react'

const ZClass11form1 = () => {
    const [form,setForm]= useState({
        username:"",
        email:"",
        age:""
    })

   const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(form);
}

    const handleChange=(e)=>{
        const {name,value}= e.target 
        setForm((prev)=>({

            ...prev,
            [name]:value

        }))
    }


  return (
    <div>

        <form action="" onSubmit={handleSubmit}>

        Name: <input type="text" placeholder='Your Name>' name='username' value={form.username} onChange={handleChange}/>
        Email: <input type="email" placeholder='Your email>' name='email' value={form.email} onChange={handleChange} />
        Email: <input type='number' placeholder='Your email>' name='age' value={form.age} onChange={handleChange} />
        <button type='submit'>Submit</button>

      </form>
      
    </div>
  )
}

export default ZClass11form1
