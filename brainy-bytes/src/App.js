import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Levels from './pages/Levels';
import Topics from './pages/Topics';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Levels" element={<Levels />} />
        <Route path="/Topics" element={<Topics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
