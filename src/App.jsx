
// import React from "react"

// import Card from "./Card"
import "./App.css"
import ZClass1 from "./ZClass1"
import ZClass2 from "./ZClass2"
import ZClass3 from "./ZClass3"
import Vite from '/vite.svg'



const App=()=>{


  return(

    <>

   
     <h1>Hellow from react</h1>
     <ZClass1/>
     <ZClass2/>
     <ZClass3/>
     <img src={Vite}  width="200px" />
    

    </>

      )
  

}



export default App