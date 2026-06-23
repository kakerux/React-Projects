import React, { useEffect, useEffectEvent, useState } from 'react'

const ZClass20useefectevent2 = () => {

    const [form,setForm] = useState({name:"",email:""})

    const onChange= useEffectEvent(()=>{
        console.log("Form:" , form);
    })

    useEffect(()=>{

        const interval = setInterval(() => {
            
            onChange()
        }, 1000);

        return () => clearInterval(interval)

    },[])
  return (
    <div>
      
    Name:   <input type="text" placeholder='Write' value={form.name} onChange={(e)=> setForm({...form , name:e.target.value})}/>
    Email:   <input type="text" placeholder='Write' value={form.email} onChange={(e)=> setForm({...form , email:e.target.value})}/>

    </div>
  )
}

export default ZClass20useefectevent2
