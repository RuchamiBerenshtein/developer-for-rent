import * as React from "react";
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom"
import './App.css';
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
        <Routes>
            <Route path="/" exact element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/BusinessDetails" element={<BusinessDetails/>}></Route>
            <Route path="/Details" element={<Details/>}></Route>
            <Route path="/Manager" element={<Manager/>}></Route>
            <Route path="/Schedule" element={<Schedule/>}></Route>
            <Route path="/ServicesManagement" element={<ServicesManagement/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
