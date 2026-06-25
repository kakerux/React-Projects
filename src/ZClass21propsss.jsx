import React from 'react'

const Parent =()=>{

  // this is prop drilling sending data from parent to child or grandchilds and so on .
  
    const username = "Nishant spartan"
    return <Child name={username}/>
  }

  const Child=({name})=>{
    return <Grandchild name={name}/>
  }

  const Grandchild=({name})=>{
    return <h1>My name is {name}</h1>
  }

const ZClass21propsss = () => {

  
  return (
    <>
      <Parent/>
    </>
  )
}

export default ZClass21propsss
