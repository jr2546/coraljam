import React, {
    useContext,
    useMemo,
    useState,
} from 'react';

export const LoggerContext = React.createContext();

export function LoggerProvider(
    {
        children,
    },
) {

    const fn = (...args) => {
        console.log(...args);
    };

    const value = {
        log: {
            debug: fn,
        },
    };

    return (
        <LoggerContext.Provider value={value}>
            {children}
        </LoggerContext.Provider>
    );
}

export const useLogger = () => useContext(LoggerContext);
