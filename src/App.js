import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/index';
import NavBar from './Components/NavBar';
import Catalog from './Components/Catalog';
import Details from './Components/Details';

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/gifts' element={<Catalog/>} />
        <Route path='/gifts/:id' element={<Details/>} />
      </Routes>
    </div>
  );
}

export default App;
