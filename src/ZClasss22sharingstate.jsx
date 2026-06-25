import React, { useState } from 'react'

const Parent = () => {
    const [count,setCount] = useState(0)
    return (
        <>
        <Child count={setCount}/>
        <GrandChild num = {count}/>
        
        </>
    )
}

const Child = ({count}) => {
    const handleClick = () =>{
        count(prev=>prev+1)
    }
    return (
        <>
    <button onClick={handleClick}>Click</button>
   
    </>
    )
}

const GrandChild = ({num}) =>{
    return <h1>count: {num}</h1>
}

const ZClasss22sharingstate = () => {
  return (
    <div>
      <Parent/>


    </div>
  )
}

export default ZClasss22sharingstate
