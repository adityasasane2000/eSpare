import React from 'react'
import Navbar from './features/Navbar'
import Into from './features/Into';

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Into/>
//   },
//   {
//     path:"/web",
//     element:<Devlopment></Devlopment>
//   },
// ]);

const App = () => {
  return (
    <>
      <Navbar/>
      <Into />
    </>
  )
}

export default App