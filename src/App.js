import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home } from './components/home';
import { Login } from './components/login';
import { BusinessDetails } from './components/businessDetails';
import { Details } from './components/details';
import { Manager } from './components/manager';
import { Schedule } from './components/schedule';
import { ServicesManagement } from './components/servicesManagement';
// import { UserIDContextProvider } from './context/userContext';
function App() {

  return (
    // <UserIDContextProvider>
    <div className="App">

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/BusinessDetails" element={<BusinessDetails />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/Manager" element={<Manager />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/ServicesManagement" element={<ServicesManagement />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
    // </UserIDContextProvider>
  );
}

export default App;


