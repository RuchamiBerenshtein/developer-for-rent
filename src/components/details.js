/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../context/User.context';
import { Navigation } from './navigation';
import '../css/details.css';


export const Details = () => {

  const [details, setDetails] = useState({})
  const { userID, businessURL } = useContext(UserContext);

  useEffect(() => {
    async function getBusiness() {
      try {
        const res = await axios.get(businessURL + userID);
        setDetails(res.data);
      } catch (err) {
        console.log(err)
      }
    }
    getBusiness();
  }, []);

  return (
    <div>
      <menu>
        <Navigation />
        {/* <img src={details.img} alt="Logo" className='logo'/> */}
      </menu>
      <div className="details">
        <h1 className="title">{details.businessName}</h1>
        <h1>{details.description}</h1>
      </div>
      <footer>By {details.ownersName}</footer>
    </div>
  )
}


