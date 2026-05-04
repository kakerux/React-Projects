import React, { useEffect, useState } from 'react'

const ZClass15usetimer = () => {
    const [second,setSecond]=useState(0)

    // useEffect(()=>{
    //    const interval=setInterval(() => {
    //     setSecond(second+1)
    //    }, 1000);
        
    // },[second])
  return (
    <div>
      

<h1>Seconds: {second} </h1>


    </div>
  )
}

export default ZClass15usetimer
