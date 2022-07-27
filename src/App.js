import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Route
} from 'react-router-dom';
// import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Login from './components/Login';
import BusinessDetails from './components/BusinessDetails';
import Details from './components/Details';
import Manager from './components/Manager';
import Schedule from './components/Schedule';
import ServicesManagement from './components/ServicesManagement';
function App() {

  return (
    <div className="App">

      <Router>
        <Route path="/login" ><Login /></Route>
        <Route path="/BusinessDetails" > <BusinessDetails /></Route>
        <Route path="/Details" ><Details /></Route>
        <Route path="/Manager" ><Manager /></Route>
        <Route path="/Schedule" ><Schedule /></Route>
        <Route path="/ServicesManagement" ><ServicesManagement /></Route>
        <Route path="/" exact><Home /></Route>
      </Router>
    </div>
  );
}

export default App;
