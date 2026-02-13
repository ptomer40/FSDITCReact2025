import React, { useState } from 'react'
import cat from './cat3.png'
function ImageManipulation() {
  const [catHeight,setCatheight]=useState(200);
  const[red,setRed]=useState(0);
  const[green,setGreen]=useState(0);
  const[blue,setBlue]=useState(0);
  const[imgAngle,setImgAngle]=useState(0);

  function imgRotate(){
    // alert("Hiiii....");
    setImgAngle(imgAngle+30);
  }

    function setColor(){
      setRed(Math.random()*255);
      setGreen(Math.random()*255);
      setBlue(Math.random()*255);
    }

  return (
    <div>ImageManipulation

    <div style={{margin:'0px auto',border:'2px solid green', width:'350px', height:'400px', paddingLeft:'300px', paddingTop:'100px'}}>
      <img src={cat} height={catHeight} width={200} alt='cat image' style={{transform:`rotate(${imgAngle}deg)`,backgroundColor:`rgb(${red},${green},${blue})`}}/>
    
    
    </div>
    <div>
      <button onClick={()=>setCatheight(catHeight+20)}>Increase Height</button>
    <button onClick={setColor}>Change background color</button>
    <button onClick={imgRotate}>ImageRotate</button>
    </div>

    </div>
  )
}

export default ImageManipulation