import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/index';

function App() {
  return (
    <Routes>
      <Route path="/gifts" element={<Home/>} />
    </Routes>
  );
}

export default App;
