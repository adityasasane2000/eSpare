import React from 'react'
import Navbar from './features/Navbar'
import Home from './features/Home';

const App = () => {
  return (
    <div className='w-[100%]'>
      <Navbar/>
      <Home />
    </div>
  )
}

export default App