import React, { useEffect, useEffectEvent, useState } from 'react'

const ZClass19useeffectevent = () => {

    // it is used as in useeffect it cant show the data on the console when something is in interval function .

    const [count , setCount] = useState(0)
    const onTick= useEffectEvent(()=> {console.log("Count :",count);
            
            setCount(prev => prev+1 )})

    useEffect(()=>{
        const id = setInterval(() => {
            onTick()
         }, 1000);
        
      return () =>  clearInterval(id)
    },[])

  return (
    <div>
      
      <h1>Count: {count}</h1>

    </div>
  )
}

export default ZClass19useeffectevent
