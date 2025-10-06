import React, { useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Menu } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleToggle = () => setMobileOpen(!mobileOpen);
  const handleCloseMobile = () => setMobileOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={handleCloseMobile}>
          <span style={{ marginLeft: 8 }}>Reusable Component</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Login
            </Link>
          </li>
          {user ? (
            <>
              {user.role === "admin" && (
                <li className="nav-item">
                  <Link to="/admin/dashboard" className="nav-links">
                    Dashboard
                  </Link>
                </li>
              )}
              {user.role === "client" && (
                <li className="nav-item">
                  <Link to="/dashboard" className="nav-links">
                    Dashboard
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <button className="nav-links-button" onClick={logout}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/register" className="nav-links">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* Mobile Nav Toggle */}
        <button
          className="mobile-menu-icon"
          onClick={handleToggle}
          aria-label="Toggle menu"
        >
          <Menu size={28} color="#fff" />
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-nav ${mobileOpen ? "open" : ""}`}>
          <ul className="mobile-nav-menu">
            <li>
              <Link to="/" onClick={handleCloseMobile}>Home</Link>
            </li>
            {user ? (
              <>
                {user.role === "admin" && (
                  <li>
                    <Link to="/admin/dashboard" onClick={handleCloseMobile}>Dashboard</Link>
                  </li>
                )}
                {user.role === "client" && (
                  <li>
                    <Link to="/dashboard" onClick={handleCloseMobile}>Dashboard</Link>
                  </li>
                )}
                <li>
                  <button className="mobile-logout-button" onClick={() => { logout(); handleCloseMobile(); }}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/register" onClick={handleCloseMobile}>Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
