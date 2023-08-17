
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-brand">DORSIN</div>
        <ul className="navbar-nav">
          <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="/services" className="nav-link">Services</a></li>
          <li className="nav-item"><a href="/Features" className="nav-link">Features</a></li>
          <li className="nav-item"><a href="/contact" className="nav-link">Pricing</a></li>
          <li className="nav-item"><a href="/contact" className="nav-link">Team</a></li>
          <li className="nav-item"><a href="/contact" className="nav-link">Blog</a></li>
          <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>
      <div className="background-image"> </div>

    </div>

  );


}

export default App;
