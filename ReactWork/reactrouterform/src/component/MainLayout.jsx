import React from 'react'
import {Link} from 'react-router-dom'
function MainLayout() {
  return (
    <div>
    <h2 style={{backgroundColor:'#9eb5b8ff', color:'red'}}>Welcoome to React Router DOM</h2>
<nav>
    <Link to='/login' style={{fontSize:'40px', marginLeft:'100px'}}>Login</Link>
    <Link to='/register' style={{fontSize:'40px', marginLeft:'200px'}}>Registration</Link>
</nav>
    </div>
  )
}

export default MainLayout