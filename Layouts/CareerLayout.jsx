import React from 'react'
import { Outlet } from 'react-router-dom'

function CareerLayout() {
  return (
    <div>
        <h1>Careers</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quos.</p>
        <Outlet/>

      
    </div>
  )
}

export default CareerLayout
