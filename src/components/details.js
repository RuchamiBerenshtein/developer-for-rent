import React from 'react';
import Navigation from "./navigation";

// const axios = require('axios').default;

// const url = new URL('https://meetings-test.herokuapp.com/business/d1d6012c-d5d5-4dae-afd9-1e8e5ddb27ba')

// const getDetails = async() => {
//     try {
//         const response = await axios.get(url);
//         console.log(response);
//     } catch (error) {
//         console.error(error);
//     }
// }

const Details = () => {
    return (
        <div>
            <Navigation />
            <br></br>
            <div>Details!!!</div>
        </div>

    )
}

export default Details;

