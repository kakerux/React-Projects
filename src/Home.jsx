import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate=useNavigate()

    const handleNav=()=>{
        
        navigate("/contact")
    }

  return (
    <div>
      <h1>THis is form the HOme Page </h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, maiores.</p>
      <button onClick={handleNav}>GO TO Contact</button>
    </div>
  )
}

export default Home
