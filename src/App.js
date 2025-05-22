import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Levels from './pages/Levels';
import Topics from './pages/Topics';
import AuthPage from './pages/AuthPage';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Topics" element={<Topics />} />
          <Route path="/Topics/:topicId" element={<Levels />}  />
          <Route path="/AuthPage" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
