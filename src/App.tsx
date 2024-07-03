
import Navbar from './components/Navbar';
import './App.css';
import Main from './components/Main';


function App() {
  return (
    <div className=" bg-black absolute inset-0 h-max w-full dark:bg-black bg-white opacity-97 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]]">
      <Navbar/>
      <Main/>
    </div>
  )
}

export default App
