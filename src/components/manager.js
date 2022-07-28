import React from 'react';
import { Link } from "react-router-dom";

const Manager = () => {
    return (
        <div>
            <div>Manager!!!</div>
            <nav>
                <Link to="/ServicesManagement">Services</Link> | {" "}
                <Link to="/busimessDetails">business details</Link> | {" "}
                <Link to="/schedule">schedule</Link>
            </nav>
            {/* <div className="content">
                <Outlet/>
            </div> */}
        </div>
    )
}

export default Manager;