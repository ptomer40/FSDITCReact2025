import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import MainLayout from './component/MainLayout'
import Login from './component/Login'

import Dashboard from './component/Dashboard'
import Registration from './component/Registration';
function App() {
 const [logData,setLogData]=useState();

  return (
    <>
     {/* <h2>Welcome to React Router DOM</h2> */}
     <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Registration regdata={setLogData}/>} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>

     </BrowserRouter>
    
    {JSON.stringify(logData)}
    </>
  )
}

export default App
