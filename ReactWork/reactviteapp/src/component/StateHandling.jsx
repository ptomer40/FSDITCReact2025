import React, {useState} from 'react'

function StateHandling() {
    const [counetr,setCounter]=useState(20);
    function increaseValue(){
    //   alert("Hiiiii");
    setCounter(counetr+10);
    }
  return (
    <div>StateHandling
        <h2>Counter value={counetr}</h2>
        <button onClick={increaseValue}>Increase value</button>
        <button onClick={()=>setCounter(counetr-20)}>Decrease Value</button>
    </div>
  )
}

export default StateHandling