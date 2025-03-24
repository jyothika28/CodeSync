import './App.css';
import React from 'react';
import Dashboard from './components/dashboard/Dashboard';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import CodeSync from './components/CodeSync';
import Profile from './components/profile/Profile';



function App() {
  return (
    <>
      <Router>
      
        <Routes>
          <Route path="/" Component={CodeSync} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/profile" Component={Profile} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
