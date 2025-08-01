import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Nav.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setRole(null);
    window.location.href = '/';
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          College ERP
        </Link>

        <Link to="/semester-result" className="text nav-link">
          BSSITM Result
        </Link>

        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <ul className="navbar-links-mobile">
          {!role ? (
            <li><Link to="/login" className="text">Login</Link></li>
          ) : (
            <>
              <li><Link to="/" className="text">Dashboard</Link></li>
              <li><Link to="/students" className="text">Students</Link></li>
              <li><Link to="/faculty" className="text">Faculty</Link></li>
              <li><Link to="/admin" className="text">Admin Users</Link></li>
              <li><Link to="/semester-result" className="text">Semester Results</Link></li>
              <li><Link to="/profile" className="text">Profile</Link></li>
              <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
