import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Demo from './components/Demo';
import Navbar from './components/Navbar';


export default function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Navbar/>
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
