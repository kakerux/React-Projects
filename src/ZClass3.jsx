import React from 'react'
import { useState } from 'react'
import './App.css'

const ZClass3 = () => {

 const [checked,setChecked]=useState(false)

 const isVisible = false

    
  return (
    <div>
      
      <input type="checkbox" name="" checked={checked} onChange={()=>setChecked(!checked)} />

    <p>{checked ? "it is checked"  :  "not checked" } </p> 

<h1 className={isVisible ? "visible" : "invisible"}>Visibility</h1>
<p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, eveniet.</p>



    </div>
  )
}

export default ZClass3
