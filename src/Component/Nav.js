import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  
  return (
        <div>
          <div className='nav'>
         <nav>
         <NavLink  to ="/">Home</NavLink>
          <NavLink  to="/Movies" >Movies</NavLink>
          <NavLink  to="/food">Food</NavLink>
          <NavLink  to="/technology">Technology</NavLink>
          <NavLink  to="/Tourism">Tourism</NavLink>
          <NavLink  to="/fitness">Fitness</NavLink>
          
         </nav>
        </div>
        <hr/>
        </div>
        
  )
}

export default Nav