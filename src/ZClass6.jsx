import React, { useState } from 'react'

const ZClass6 = () => {
    const [index,setIndex]=useState(0)
    const handleCounter=()=>{
        setIndex(index+1)
    }
    const handleDcounter=()=>{
        setIndex(index-1)
    }

    const [like, setLike] = useState(false) 


  return (
    <div>
      Counter:  {index} <br />
      <button onClick={handleCounter}>Increase</button>
      <button onClick={handleDcounter}>Decrease</button>
      {index<0 && <p1>Cant go below</p1>}
<br />

      <button onClick={() => setLike(!like)}>
        {like? "❤️ Liked" : "🤍 Like"}
      </button> 
   
    </div>
  )
}

export default ZClass6
