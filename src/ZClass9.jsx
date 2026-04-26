import React, { useRef } from 'react'

const ZClass9 = () => {
    const nameRef = useRef("Guest")
    console.log(nameRef.current.value);
    
  return (
    
    <div>
      
      <input type="text" placeholder='Write name' ref={nameRef}/>
    </div>
  )
}

export default ZClass9
