import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import CareerPlanning from './pages/CareerPlanning';
// import Profile from './pages/Profile';
import Login from './pages/Login';
import { Brain } from 'lucide-react';

function getStarted() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/career-planning" element={<CareerPlanning />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
            <Route path="/login" element={ <Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default getStarted;