import * as React from 'react';
import { Link } from "react-router-dom";
import '../css/navigation.css';
// import Login from './Login';
// import Home from './Home';

function Navigation() {
    return (
        <div className="navigation">
            <nav>
                <Link to="/login" className="nav-links">manager entrence</Link> | {" "}
                <Link to="/" className="nav-links">Home page</Link>
            </nav>

            {/* <Routes> */}
                {/* <Route path="login" element={<Login />} /> */}
                {/* <Route path="" element={<Home />} /> */}
            {/* </Routes> */}
        </div>
    );
}

export default Navigation;
