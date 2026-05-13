
// import React from "react"

// import Card from "./Card"
import "./App.css"
import FormValidation from "./FormValidation"
import ZClass1 from "./ZClass1"
import ZClass10form from "./ZClass10form"
import ZClass11form1 from "./ZClass11form1"
import ZClass12form2 from "./ZClass12form2"
import ZClass13form3 from "./ZClass13form3"
import ZClass14useeffect from "./ZClass14useeffect"
import ZClass15usetimer from "./ZClass15usetimer"
import ZClass16windowbox from "./ZClass16windowbox"
import ZClass17apicapture from "./ZClass17apicapture"
import ZClass18reactrouter from "./ZClass18reactrouter"
import ZClass2 from "./ZClass2"
import ZClass3 from "./ZClass3"
import ZClass4 from "./ZClass4"
import ZClass5 from "./ZClass5"
import ZClass6 from "./ZClass6"
import ZClass7 from "./ZClass7"
import ZClass8 from "./ZClass8"
import ZClass9 from "./ZClass9"
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
     <ZClass6/>
     <ZClass7/>
     <ZClass8/>
     <ZClass9/>
     <ZClass10form/>
     <ZClass11form1/>
     <ZClass12form2/>
     <ZClass13form3/>
     <FormValidation/>
     <ZClass14useeffect/>
     <ZClass15usetimer/>
     <ZClass16windowbox/>
     <ZClass17apicapture/>
     <ZClass18reactrouter/>
    

    </>

      )
  

}



export default App