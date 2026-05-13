import React from 'react'
import { Link , Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <h1>List of Products: </h1>
      <nav>
        <Link to="mobile">Mobile</Link>
        <Link to="laptop">Loptop</Link>
      </nav>

      <Outlet/>
    </div>
  )
}

export default Product
