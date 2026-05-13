import React from 'react'
import { BrowserRouter , Route , Routes , Link , useParams} from 'react-router-dom'
import App from './App'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Product from './Product'
import Mobile from './Mobile'
import Laptop from './Laptop'

const ZClass18reactrouter = () => {

    const User=()=>{
        const {id} = useParams()
        return( <h1>The id from useParams : {id}</h1> )
    }

    const NotFound=()=>{
        alert("Component not found");
        
    }

  return (
    <BrowserRouter>
    <nav>
    {/* <Link to="/">App</Link> | */}
    <Link to="/home">Home</Link> |
    <Link to="/about">About</Link> | 
    <Link to="/user/10">User</Link> |
    <Link to="/product">Product</Link> |
    
    
    </nav> 
    <Routes>
        {/* <Route path='/' element={<App/>}/> */}
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/user/:id' element={<User/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product' element={<Product/>}>
        <Route path='mobile' element={<Mobile/>}/>
        <Route path='laptop' element={<Laptop/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default ZClass18reactrouter