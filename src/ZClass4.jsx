import React from 'react'

const ZClass4 = ({name="Guest", age="34", city="Unknown",hobbies=["notcoding","notnothing"]}) => {
//    const  {name, age, city} = props
//  instead of doing this you can take those values instead of props
// you can set the default value by giving them values directly 
  return (
    <div>
      <h1>My name is {name}</h1>
      <p>age: {age}</p>
      <p>city: {city}</p>
      <h1>Hobbies</h1>
      <ul>
        {hobbies.map((value,index)=>(
          <li key={index}> {value}</li>
        ))}
      </ul>
    </div>
  )
}

export default ZClass4
