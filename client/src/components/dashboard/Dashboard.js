import React, { useState, useEffect } from 'react';
import { auth } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';
import Header from '../header/Header';
import CodeEditor from "../codeeditor/CodeEditor";

function Dashboard() {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setUserName(user.displayName || user.email.split('@')[0]);
      } else {
        // No user is signed in, redirect to home
        navigate('/');
      }
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, [navigate]);

  return (
    <div>
      <Header userName={userName} />
      <div className="container">
        <div className="row">
          <div className="col-md">
            <CodeEditor />
          </div>
          {/* <div className="col-md-5">
            <Output />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;