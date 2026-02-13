import React from 'react'
import './profile.css';
function Profile({data}) {
  return (
    <div className='container'>
       <h3>This is my profile Page</h3>
       <img src={data.pic} height={150} width={150} alt='Profile pic' style={{borderRadius:'50%'}} />
       <h2>Name:{data.name}</h2>
       <h2>Branch:{data.branch}</h2>
       <h2>Section:{data.section}</h2>
       <h2>College:{data.college}</h2>
        
        </div>

  )
}

export default Profile