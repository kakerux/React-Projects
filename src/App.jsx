
// import React from "react"

// import Card from "./Card"
import "./App.css"
import ZClass1 from "./ZClass1"
import ZClass2 from "./ZClass2"
import ZClass3 from "./ZClass3"
import ZClass4 from "./ZClass4"
import ZClass5 from "./ZClass5"
import Vite from '/vite.svg'



const App=()=>{

  const hobbies=["travelling","coding","writing"]
  const message=()=>{
    alert("This is from the props function.")
  }

  return(

    <>

   
     <h1>Hellow from react</h1>
     <ZClass1/>
     <ZClass2/>
     <ZClass3/>
     <img src={Vite}  width="100px" />
     <ZClass4 name="Nishant" age="56" city="Bhopal" hobbies={hobbies}/>
     <ZClass4/>
     <ZClass5 label="Click me" handleClick={message}/>
    

    </>

      )
  

}



export default App