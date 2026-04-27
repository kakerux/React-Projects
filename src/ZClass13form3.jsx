import React, { useRef } from 'react'

const ZClass13form3 = () => {

    const nameRef = useRef("Guest")
    const emailRef = useRef("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("Name: ", nameRef.current.value);
        console.log("Email: ", emailRef.current.value);
        
    }
  return (
    <div>
      
      <form action="" onSubmit={handleSubmit}>

<input type="text" placeholder='REF NAME' ref={nameRef} /> <br />
<input type="text" placeholder='REF EMAIL' ref={emailRef}/> <br />
<button type="submit">SUBMIT</button>
      </form>

    </div>
  )
}

export default ZClass13form3
