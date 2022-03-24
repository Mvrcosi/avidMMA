import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Admin from './Components/Admin/Admin';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile'
import { AuthProvider } from './Context/useAuth';


function App() {



  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </AuthProvider>

    </Router>
  );
}

export default App;
