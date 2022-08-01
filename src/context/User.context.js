import React from 'react';

export const UserContext = React.createContext({});

export const UserContextProvider = (props) => {
    const { children } = props;
    const userID = '836f4326-4e12-4410-b48c-50a68d9be3b6';
    const businessID='6be0eade-ee5e-4769-95fa-e92121a7296c';

    const contextValue = {
        userID,
        businessID,
    };

    return <UserContext.Provider value={contextValue}>
        {children}
    </UserContext.Provider>;
}