import React from 'react';

export const UserContext = React.createContext({});

export const UserContextProvider = (props) => {
    const { children } = props;
    const userID = 'ff5cad5c-a52c-4793-b753-565a8ca2080f';

    const contextValue = {
        userID,
    };

    return <UserContext.Provider value={contextValue}>
        {children}
    </UserContext.Provider>;
}