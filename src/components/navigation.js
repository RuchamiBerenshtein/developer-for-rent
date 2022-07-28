import React from 'react';
import '../css/navigation.css';

import { Link } from "react-router-dom";
export const Navigation = () => {
    return (
        <div className="navigation">
            <Link to="/login" className="nav-links">manager entrance</Link> | {" "}
            <Link to="/" className="nav-links">Home page</Link>
        </div>
    );
}



