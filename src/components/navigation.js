import React from 'react';
import '../css/navigation.css';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

import { Link } from "react-router-dom";
export const Navigation = () => {

    // const [value, setValue] = React.useState(0);

    // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    //     setValue(newValue);
    // };

    return (
        <div className="navigation">
            <Link to="/login" className="nav-links"><Tab icon={<ManageAccountsIcon />} label="manager entrance" /></Link> | {" "}
            <Link to="/" className="nav-links"><Tab icon={<HomeIcon />} label="Home Page" /></Link>
        </div>
    );
}





