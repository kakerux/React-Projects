import React, { useState } from 'react'

// sending data from child comp to parent comp. 

const Parentt =()=>{

    const [text , setText] =useState("")
    return(
        <>
        
        <h1>My name is {text}</h1>
        <Childd name={setText}/>
        </>

    ) 

}

const Childd=({name})=>{

    const [temptext , setTemptext] = useState("")

    

    const onPush=()=>{

        name(temptext)

    }

    return (
        <>
        <input type="text" placeholder='write anything' onChange= {(e)=>setTemptext(e.target.value)}/>
        <button onClick={onPush}>Change</button>
        
        </>
    )

}


const ZClassstatelifting = () => {



  return (
    <div>
      <Parentt/>
    </div>
  )
}

export default ZClassstatelifting
