import React from 'react';
// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";
export const Navigation = () => {
    return (
        <div className="navigation">
            <Link to={"/login"}>Login </Link>
            <Link to={"/"}>Home</Link>
        </div>
    );
}

