import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Golden Companion</h1>
        <Link to="/social-links">
          <button>Go to Social Links</button>
        </Link>
      </header>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Social Links</h1>
        <p>This is where you'll display social links information.</p>
        <Link to="/">
          <button>Back to Home</button>
        </Link>
      </header>
    </div>
  );
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/social-links" element={<SocialLinks />} />
      </Routes>
    </div>
  );
}

export default App;
