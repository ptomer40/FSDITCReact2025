import React from 'react'
import Profile from './Profile'

function Gallery() {
  const student=
  [
  {
    pic:'https://www.flexjobs.com/blog/wp-content/uploads/2022/06/07130847/How-to-Put-Your-Work-Samples-Online.jpg',
    name:"Vansh Tomer",
    barnch:"IT",
    section:'C',
    college:'ABES Engineering College'
  },
  {
    pic:'https://www.flexjobs.com/blog/wp-content/uploads/2022/06/07130847/How-to-Put-Your-Work-Samples-Online.jpg',
    name:"Ankit Kumar",
    barnch:"CS",
    section:'B',
    college:'ABES Engineering College'
  },
  {
    pic:'https://www.flexjobs.com/blog/wp-content/uploads/2022/06/07130847/How-to-Put-Your-Work-Samples-Online.jpg',
    name:"Ansh Tomer",
    barnch:"CSE",
    section:'A',
    college:'ABES Engineering College'
  },
  {
    pic:'https://www.flexjobs.com/blog/wp-content/uploads/2022/06/07130847/How-to-Put-Your-Work-Samples-Online.jpg',
    name:"Amit Tomer",
    barnch:"CSE",
    section:'B',
    college:'ABES Engineering College'
  }
]
  return (
    <div>
{/* <Profile name="Vansh Tomar" branch="IT" section="C" college="ABES Engineering College" />
<Profile name="Vijay Singh" branch="CS" section="B" college="ABES Engineering College" />
<Profile /> */}
 {/* <Profile data={student[1]} /> */}

 {
  student.map((ele,index)=>(
   <Profile data={ele} key={index} />
  ))
 }
    </div>
  )
}

export default Gallery