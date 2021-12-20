import React, {
    useContext,
    useMemo,
    useState,
} from 'react';

export const UserContext = React.createContext();

export function UserProvider(
    {
        children,
    },
) {

    const [ user, setUser ] = useState();

    const value = useMemo(
        () => (
            {
                user,
                setUser,
            }
        ),
        [
            user,
        ],
    );

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);
