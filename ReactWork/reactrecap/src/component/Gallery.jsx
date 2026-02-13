import React from 'react'
import ICard from './ICard'

function Gallery() {

    const student={
        name:"Vansh Tomer",
        roll:"786868",
        barnch:"IT",
        section:"C"
    }
  return (
    <div>
        {/* <ICard name="Ansh Tomer" roll="66767" branch="IT" section="C" />
         <ICard name="Vansh Tomer" roll="898989" branch="IT" section="C" />
          <ICard name="Vicky Singh" roll="4903434" branch="IT" section="C" /> */}
    
    <ICard data={student} />
    </div>
  )
}

export default Gallery