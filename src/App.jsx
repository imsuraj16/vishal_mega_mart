import React from 'react'
import Sidenav from './components/Sidenav'
import Mainroutes from './routes/Mainroutes'

const App = () => {
  return (
    <div className='w-full min-h-screen flex'>
      <Sidenav/>
      <Mainroutes/>
    </div>
  )
}

export default App
