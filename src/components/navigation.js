import React from 'react';
// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";
// import Login from './Login';
// import Home from './Home';
function Navigation() {
    return (
        <div className="navigation">
            {/* <Link to={"/products/" + (i + 1)}>{i + 1} </Link> */}
            <Link to="/login">Login</Link> | {" "}
            <Link to="/">Home</Link>

            {/* <Routes> */}
                {/* <Route path="login" element={<Login />} /> */}
                {/* <Route path="" element={<Home />} /> */}
            {/* </Routes> */}
        </div>
    );
}

export default Navigation;
