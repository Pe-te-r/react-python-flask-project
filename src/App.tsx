import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar"
import Login from './pages/auth/Login';
import Home from './pages/Home';
import Register from './pages/auth/Register';
import ProtectedRoute from './components/Protect';

function App() {
  
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<ProtectedRoute roleRequired="USER"><Home /> </ProtectedRoute>}/>
        {/* <Route path='/' element={<Home />}/> */}
        <Route path='/login' element={<Login  />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
