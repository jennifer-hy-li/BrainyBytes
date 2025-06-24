import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Levels from './pages/Levels';
import Topics from './pages/Topics';
import AuthPage from './pages/AuthPage';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import GameplayPage from './pages/GameplayPage';
Amplify.configure(awsExports);


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Topics" element={<Topics />} />
          <Route path="/Topics/:topicId" element={<Levels />}  />
          <Route path="/Play/:topicId/:level" element={<GameplayPage />}  />
          <Route path="/AuthPage" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
