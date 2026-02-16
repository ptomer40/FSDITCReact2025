import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const[loader,setLoader]=useState(false)

  async function getServerData(){
    try{
      setLoader(true)
    //alert("hi....")
     const serverData=await fetch('http://localhost:4002/data')
     const jsondata=await serverData.json();
     setData(jsondata);
    }catch(e){
      console.log(e)
    }
    finally{
    setLoader(false)
    }
}

  return (
    <>
      <h2>Fetching data using Node server</h2>
      {
        data.map((ele)=>(
          <div>
            <h2>{ele.id}:{ele.title}</h2>
          </div>
        ))
      }
      <button onClick={getServerData}>FetchData</button>
      {loader?(<h2 style={{color:'brown',backgroundColor:'white'}}>Data is loading...</h2>):("")}
      {/* {JSON.stringify(data)} */}
    </>
  )
}

export default App
