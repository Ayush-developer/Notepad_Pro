import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import HomePage from './pages/HomePage'; 
import LoginPage from './pages/login'; // Login page
import SignupPage from './pages/register'; // Signup page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        

     
      </Routes>
    </Router>
  );
}

export default App;
