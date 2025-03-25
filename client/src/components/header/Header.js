import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { auth } from '../../config/firebase';

function Header({ userName }) {
  const handleSignOut = () => {
    auth.signOut()
      .then(() => {
        // Redirect to home page or reload
        window.location.href = '/';
      })
      .catch((error) => {
        console.error("Sign out error", error);
      });
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand agu-display-400 logo" to="/">
            CodeSync
          </Link>
          {userName && (
            <div className="navbar-nav ml-auto d-flex align-items-center">
              <span className="navbar-text mr-3">
                Welcome, {userName}
              </span>
              <div className="btn-group">
                <Link to="/dashboard" className="btn btn-primary mr-2">
                  Dashboard
                </Link>
                <Link to="/profile" className="btn btn-secondary mr-2">
                  Profile
                </Link>
                <button 
                  onClick={handleSignOut} 
                  className="btn btn-danger"
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;