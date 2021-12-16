import React, {
    useContext,
    useMemo,
    useState,
} from 'react';
import {
    useConfiguration,
    useSyncedStore,
    useWebRtc,
} from './index';
import {
    getYjsValue,
} from "@syncedstore/core";

export const ThingsContext2 = React.createContext();

export function ThingsProvider2(
    {
        children,
    },
) {

    const { defaultRoom } = useConfiguration();
    const store = useSyncedStore();
    const provider = useWebRtc(defaultRoom, getYjsValue(store));

    // debugger;

    const value = {
        store,
        provider,
    };

    return (
        <ThingsContext2.Provider value={value}>
            {children}
        </ThingsContext2.Provider>
    );
}

export const useThings2 = () => useContext(ThingsContext2);
