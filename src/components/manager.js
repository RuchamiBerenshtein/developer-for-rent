import * as React from 'react';
import { Link, Outlet } from "react-router-dom";

export const Manager = () => {
    return (
        <div className="body">
            <h1 className="welcome-title">Welcome to the manager page!!!</h1>
            <nav>
                <Link to="/ServicesManagement" className="nav-links">Services</Link> | {" "}
                <Link to="/busimessDetails" className="nav-links">business details</Link> | {" "}
                <Link to="/schedule" className="nav-links">Schedule</Link> 
            </nav>
            <div className="content">
                <Outlet/>
            </div>
        </div>
    )
}

