import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './pages/Home'

function App() {
  

  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#0b180f] text-white overflow-x-hidden">

        <Home/>
       
      </div>
    </>
  )
}

export default App
