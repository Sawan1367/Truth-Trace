import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, User, LineChart, LogOut } from 'lucide-react';

const Navbar = () => {
  const isLoggedIn = true; // TODO: Replace with actual auth state
  const userEmail = "anything@example.com"; // TODO: Replace with actual user data

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-800">TruthTrace</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/dashboard" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
              <LineChart className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link to="/career-planning" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
              <Brain className="h-5 w-5" />
              <span>Career Planning</span>
            </Link>
            
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
                  <User className="h-5 w-5" />
                  <span>{userEmail}</span>
                </Link>
                <button className="flex items-center space-x-1 text-gray-600 hover:text-red-600">
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link to="/login" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
                <User className="h-5 w-5" />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;