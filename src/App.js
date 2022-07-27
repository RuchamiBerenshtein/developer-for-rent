import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Route
} from 'react-router-dom';
// import { Route, Routes } from 'react-router';
import Home from './components/home';
import Login from './components/login';
import BusinessDetails from './components/businessDetails';
import Details from './components/details';
import Manager from './components/manager';
import Schedule from './components/schedule';
import ServicesManagement from './components/servicesManagement';
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
