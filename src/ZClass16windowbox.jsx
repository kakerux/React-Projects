import React, { useEffect, useState } from 'react'

const ZClass16windowbox = () => {

    const[width,setWidth]=useState(window.innerWidth)

    useEffect(()=>{

        const handleresize =()=>{
            setWidth(window.innerWidth)

        }
        
        window.addEventListener('resize',handleresize)

        return ()=>{
        window.removeEventListener('resize',handleresize)

        }
       
        
    },[])


  return (
    <div>
      
      <h1>Window width tracker</h1>
      Window Width {width}px
    </div>
  )
}

export default ZClass16windowbox
