import React from 'react';
import './header.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase';

function Header({ userName }) {
  const navigate = useNavigate();

  const handleSignOut = () => {
    auth.signOut()
      .then(() => {
        // Redirect to home page
        navigate('/');
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
            <div className="ms-auto d-flex align-items-center">
              {/* New buttons added here */}
              <div className="me-3">
                <button className="btn btn-primary me-2">
                  <i className="bi bi-plus-circle me-1"></i>New Project
                </button>
                <button className="btn btn-outline-secondary">
                  <i className="bi bi-chat-left-text me-1"></i>Invite
                </button>
              </div>

              <div className="dropdown">
                <button 
                  className="btn btn-secondary dropdown-toggle" 
                  type="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  {userName}
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li>
                    <Link 
                      to="/profile" 
                      className="dropdown-item"
                    >
                      <i className="bi bi-person me-2"></i>Profile
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/dashboard" 
                      className="dropdown-item"
                    >
                      <i className="bi bi-speedometer2 me-2"></i>Dashboard
                    </Link>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button 
                      onClick={handleSignOut} 
                      className="dropdown-item text-danger"
                    >
                      <i className="bi bi-box-arrow-right me-2"></i>Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;