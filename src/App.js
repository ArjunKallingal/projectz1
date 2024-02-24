import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './header/Header';
import Home from './components/Home';
import Login from './register/Login';
import Singup from './register/Singup';
import Adminpanel from './adminpannel/Adminpanel';
import Feedback from './components/Feedback';
import Servicepage from './pages/Servicepage';
import Projectpage from './pages/Projectpage';
import Aboutpage from './pages/Aboutpage';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Servicepage />} />
          <Route path='/projects' element={<Projectpage />} />
          <Route path='/about' element={<Aboutpage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/singup' element={<Singup />} />
          <Route path='/admin-panel' element={<Adminpanel />} />
          <Route path='/feedback' element={<Feedback />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
