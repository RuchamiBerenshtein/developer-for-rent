import React from 'react';
import {
  BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from '../src/components/home'
import Login from '../src/components/login'

function App() {
  return ( 
    <Router>
      <Route path='/' exact> 
        <Home/>
      </Route>
      <Route path='/login' > 
        <Login/>
      </Route>
    </Router>
  );
}

export default App;
