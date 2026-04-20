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
    
   const handleChange=(event)=>{
    console.clear()
    
    console.log(event.target.value);
    
   }
   const doubleClick=()=>{
    alert("button is clicked 2 times")
   }
   const mouseLeave=()=>{
    alert("mouse is leaving")
   }
   const mouseEnter=()=>{
    alert("mouse is entering")
   }

  return (
    <>
    
    <h1>Hellow from another file {myName}</h1>
    <h2>This is from function {getName()}</h2>
    <h3>This is from attribute {getName(name1)}</h3>

    <button onClick={PopUp} className='caret-red-50'>Click me</button>
    <button onClick={()=> alert("From inline function!!")}> BYE </button> <br /><br />
    <input type="text" placeholder='write something' onChange={handleChange} />
    <button onDoubleClick={doubleClick}>Douvle click</button>
    <button onMouseLeave={mouseLeave} onMouseEnter={mouseEnter}>Buttons l/E</button>

    
    </>
  )
}

export default ZClass1
