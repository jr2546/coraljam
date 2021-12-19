import React, {
    useContext,
    useMemo,
    useState,
} from 'react';

export const SyncContext = React.createContext();

export function SyncProvider(
    {
        id,
        children,
    },
) {

    const value = {
        id,
    };

    return (
        <SyncContext.Provider value={value}>
            {children}
        </SyncContext.Provider>
    );
}

export const useSyncContext = () => useContext(SyncContext);
