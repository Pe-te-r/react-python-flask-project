import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar"
import Login from './pages/auth/Login';
import Home from './pages/Home';
import Register from './pages/auth/Register';
import ProtectedRoute from './components/Protect';
import Layout from './pages/User-Dashboard/Layout';
import UserDash from './pages/User-Dashboard/pages/UserDash';
import UserProfile from './pages/User-Dashboard/pages/UserProfile';

function App() {
  
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<ProtectedRoute roleRequired="user"><Home /> </ProtectedRoute>}/>
        {/* <Route path='/' element={<Home />}/> */}
        <Route path='/login' element={<Login  />} />
        <Route path='/register' element={<Register />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<UserDash />} />
          <Route path="/profile" element={<UserProfile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
