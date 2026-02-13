import React, { useEffect, useState } from 'react'

function Dashboard() {
const [data,setData]=useState([]);
const[cart,setCart]=useState([]);
  useEffect(()=>{
      async function getData(){
             const response= await fetch("https://fakestoreapi.com/products");
             const resData=await response.json();
             setData(resData);
             console.log(resData);
            }
      getData();

    },[])
  
   function addToCart(ele){
    // alert(ele.title);
    setCart(data=>[...data,ele])
    alert("item added successfully!!!");

   }

  return (
    <div>
      <div>
        {
          cart.length===0?(<h4>Cart is empty</h4>):
          (
           cart.map((ele)=>(
           <h4 style={{backgroundColor:'greenyellow'}}>{ele.title}</h4>
           ))
          )
        }
      </div>
      {
        data.length===0?(
          <h2>Data not found</h2>
        ):(
        <div>
       {
        data.map((ele)=>(
          <div style={{border:'2px solid red', height:'500px', width:'300px'}}>
             <img src={ele.image} height={100} width={100}/>
             <h3>{ele.title}</h3>
             <p>{ele.description}</p>
             <h2>{ele.price}</h2>
             <button onClick={()=>addToCart(ele)}>Add to cart</button>

        </div>
        ))
       }   
        

        </div>
        )
      }
 
      {/*  */}
        
    </div>
  )
}

export default Dashboard