import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </Router>
  );
}

export default App;
