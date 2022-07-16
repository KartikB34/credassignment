import Landing from './Components/Landing/Landing';
import About from './Components/About/About';
import Points from './Components/Points/Points';
import './App.css';

function App() {
  return (
    <div className='basic-app'>
      <div>
        <Landing />
        <About />
        <Points />
       </div>
    </div>
  );
}

export default App;