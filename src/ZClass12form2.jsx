import React, { useState } from 'react'


const ZClass12form2 = () => {

    const [form,setForm]= useState({
            gender:"",
            country:"india",
            agree:false
        })

        const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(form);
}

    const handleChange=(e)=>{
        const {name,value,type,checked}= e.target 
        setForm((prev)=>({

            ...prev,
            [name]:type === "checkbox" ? checked : value

        }))
    }

  return (
    <div>
      

      <form onSubmit={handleSubmit}>

        <label>
            <input type="radio" name="gender" onChange={handleChange} checked={form.gender === "Male"} /> Male
        </label>

        <label>
            <input type="radio" name='gender' checked={form.gender === "Female"} onChange={handleChange} /> Female
        </label>
        <br />

        <label>
            <select name="country" id="" onChange={handleChange} value={form.country}>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
            </select>
        </label>
        <br />

        <label >
            <input type="checkbox" name="agree" id="" checked={form.agree} onChange={handleChange}/>
            I agree to terms and conditions. 
        </label>
<br />

         <button type="submit">Submit</button>


      </form>


    </div>
  )
}

export default ZClass12form2
