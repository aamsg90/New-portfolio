import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import home from './pages/home';
import projects from './pages/projects'; 
import experience from './pages/experience';
import Navbar from './components/Navbar';   

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<home />}/>
          <Route path="/projects" element={<projects />}/>
          <Route path="/experience" element={<experience />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


