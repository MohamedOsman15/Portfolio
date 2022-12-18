import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Links from './components/Links';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </main>
      <footer>
        <Links />
      </footer>
    </div>
  );
}

export default App;
