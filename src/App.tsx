import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="absolute inset-0 h-full w-full dark:bg-black bg-white opacity-97">
      <Navbar/>
      <Main/>
    </div>
  )
}

export default App
