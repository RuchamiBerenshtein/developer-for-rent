/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { UserContext } from '../context/User.context';
import { Service } from './service';
import '../css/home.css'


export const Services = () => {

    const { businessID, serviceURL } = useContext(UserContext);
    const [services, setServices] = useState([]);

    useEffect(() => {
        const getBusiness = async () => {
            try {
                const res = await axios.get(serviceURL + `?business_id=${businessID}`);
                console.log(res.data);
                setServices(res.data);
            } catch (err) {
                console.log(err)
            }
        }

        getBusiness();
    }, []);
// className="body"
    return (
        <div  >
            <ul>
                {services.map((service, index) => <li key={index}><Service {...service} /></li>)}
            </ul>
        </div>
    )
}


