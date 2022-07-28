import React from 'react';
import Navigation from "./navigation";
import '../css/home.css'

const Home = () => {
    return (
        <div className="body">
            <Navigation className="navigation"/>
            <h1 className="welcome-title">Welcome to Programer4Rent</h1>
        </div>
    )
}

export default Home;