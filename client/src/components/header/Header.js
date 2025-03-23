import React from 'react';
import './header.css';


function Header({ userName }) {
  console.log("Header userName:", userName); // Log the userName prop
  return (
    <header className="header">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <a className="navbar-brand agu-display-400 logo" href="/">
  CodeSync
</a>
<span class="navbar-text">
 
{userName}
      </span>
  </div>
</nav>
    </header>
  );
}

export default Header;