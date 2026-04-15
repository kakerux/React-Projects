import React from 'react'

const ZClass1 = () => {
    const myName="Nishant"

    // function only
    // const getName=()=>{
    //   return "THakur"
    // }

    // attributes
    const getName=(name)=>{
      return name
    }
    const name1="singh"

   const PopUp=()=>{
alert("this button is clicked")
   }
    
  return (
    <>
    
    <h1>Hellow from another file {myName}</h1>
    <h2>This is from function {getName()}</h2>
    <h3>This is from attribute {getName(name1)}</h3>

    <button onClick={PopUp} className='caret-red-50'>Click me</button>
    <button onClick={()=> alert("From inline function!!")}> BYE </button>
    </>
  )
}

export default ZClass1
