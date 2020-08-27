import React from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Demo from './components/Demo';


export default function App() {
  return (
    <Router basename="/">
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
          <div className="container py-0 my-0">
            <Link className="navbar-brand" to="/">Fitts' Law Demo</Link>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Demo/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
