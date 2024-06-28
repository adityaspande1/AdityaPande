import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="absolute inset-0 h-full w-full dark:bg-black bg-white opacity-97">
      <Navbar/>
    </div>
  )
}

export default App
