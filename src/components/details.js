/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../context/User.context';
import { Navigation } from './navigation';
import '../css/details.css'

const url = new URL('https://meetings-test.herokuapp.com/business/')

export const Details = () => {

    const [details, setDetails] = useState({})
    const { userID } = useContext(UserContext);

    useEffect(() => {
        async function getBusiness() {
          try {
            const res = await axios.get(url + userID);
            setDetails(res.data);
          } catch (err) {
            console.log(err)
          }
        }
        getBusiness();
      }, []);

    return (
        <div>
            <Navigation />
            <div className="details">
               <h1 className="title">{details.businessName}</h1>
               <h1>{details.description}</h1>
            </div>
        </div>
    )
}


