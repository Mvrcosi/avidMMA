import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Admin from './Components/Admin/Admin';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
