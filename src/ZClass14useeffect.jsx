import React, { useEffect, useState } from 'react'

const ZClass14useeffect = () => {
    const [count,setCount]=useState(0)

    useEffect(()=>{
        console.log("RE-rendered");
        
    },[count])
  return (
    <div>
      

<h1>Count: {count} </h1>
<button onClick={()=>setCount(count+1)}>Increase</button>

    </div>
  )
}

export default ZClass14useeffect
