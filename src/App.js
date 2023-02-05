import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Empform from './Components/Empform';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>

          <Route path='/' element={<Dashboard />} />
          <Route path='/empform' element={<Empform />} />

        </Routes>
      </div>
    </Router>

  );
}

export default App;
