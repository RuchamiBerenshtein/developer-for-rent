import React, { useContext, useState } from 'react';
import { Navigation } from './navigation';
import { UserIDContext } from '../context/userContext';

const axios = require('axios').default;


const url = new URL('https://meetings-test.herokuapp.com/business/')

const getDetails = (userID) => async () => {
    try {
        const response = await axios.get(url + userID);
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const Details = async () => {

    const userID = useContext(UserIDContext);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    // useEffect(async () => {
    const details = await getDetails(userID);
    setName(details.name);
    setDescription(details.description);
    // }, [name, description])

    return (
        <div>
            <Navigation />
            <h1>`${name}`</h1>
            <h5>`${description}`</h5>
        </div>

    )
}


