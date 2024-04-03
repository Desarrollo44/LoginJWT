import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/home';
import PrivateRoute from './Auth/privateRoute';
import axios from 'axios';

function App() {
  const token = sessionStorage.getItem('auth');
  axios.defaults.baseURL = "http://localhost:8080";
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        {/* <Route path="/" element={token ? <Home/> : <Navigate to="/login"/>} /> */}
        <Route element={PrivateRoute()}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;