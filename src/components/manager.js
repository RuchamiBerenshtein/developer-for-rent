import * as React from 'react';
import { Link, Outlet } from "react-router-dom";

export const Manager = () => {
    return (
        <div className="body-manager">
            <h1 className="welcome-title">Welcome to the manager page!!!</h1>
            <nav>
                <Link to="/ServicesManagement" className="nav-links">Services</Link> | {" "}
                <Link to="/BusinessDetails" className="nav-links">Business details</Link> | {" "}
                <Link to="/Schedule" className="nav-links">Schedule</Link> 
            </nav>
            <div className="content">
                <Outlet/>
            </div>
        </div>
    )
}

