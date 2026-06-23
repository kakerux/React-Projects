import React, { useEffect, useState } from 'react'

const ZClass15usetimer = () => {
    const [second,setSecond]=useState(0)
    const [minutes,setMinutes]=useState(0)
    const [hours,setHours]=useState(0)

    const handleStart=()=>{

      useEffect(()=>{
       const interval=setInterval(() => {
        setSecond(second+1)

        
        
        
        if(second>100){
          setMinutes(minutes+1)
          setSecond(0)
        }
        else if(minutes>60){
          setHours(hours+1)
          setMinutes(0)
        }
       }, 100);
        
    },[second])
      
    }

    const handleStop=()=>{
      clearInterval(interval)
    }

const handleReset=()=>{
  clearInterval(interval)
  setHours(0)
  setMinutes(0)
  setSecond(0)
}

    // 
  return (
    <div>
      
<h1>Stop Watch: </h1>
 {second>10?'0:0': second} : {minutes>10 ?'0:0': minutes} : {hours>10 ? '0:0' : hours}
 <br />
 <button onClick={handleStart}>Start</button>
 <button onClick={handleStop}>Stop</button>
 <button onClick={handleReset}>Reset</button>


    </div>
  )
}

export default ZClass15usetimer
