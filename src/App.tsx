import Navbar from './components/Navbar';
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <div className="absolute inset-0 bg-grid">
        <Navbar />
        <Main />
      </div>
    </div>
  );
}

export default App;

