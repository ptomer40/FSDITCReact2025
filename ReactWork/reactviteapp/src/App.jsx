import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Profile from './component/Profile'
import Gallery from './component/Gallery'
import StateHandling from './component/StateHandling'
import ImageManipulation from './component/ImageManipulation'

function App() {
  

  return (
    <div>
      <h2>WElcome to react and vite App</h2>
      {/* <h3>
        <Profile/>
      </h3> */}

      {/* <Gallery /> */}
      {/* <StateHandling /> */}
      <ImageManipulation />
    </div>
  )
}

export default App
