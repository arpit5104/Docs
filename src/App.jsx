import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'
import Add from './components/Add'

function App() {
  return (
    <>
    <div className=' relative w-full h-screen bg-zinc-800'>
      <Background/>
      <Foreground/>
      <Add/>
    </div>
    </>
  )
}

export default App