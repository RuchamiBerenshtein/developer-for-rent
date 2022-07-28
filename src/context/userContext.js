import react from 'react';
import React from 'react';


export const UserIDContext = react.createContext({});

export const UserIDContextProvider = (props) => {

    const children = props.children;
    const userID = 'cad67400-fdaa-4120-bd9f-f1cd58850ff9';

    return <UserIDContext.Provider value={userID} >
        {children}
    </UserIDContext.Provider>
}
