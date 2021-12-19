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

export const WhiteboardContext = React.createContext();

export function WhiteboardProvider(
    {
        children,
    },
) {

    const { defaultRoom } = useConfiguration();
    const store = useSyncedStore();
    const provider = useWebRtc(defaultRoom, getYjsValue(store));

    const value = {
        _store: store,
        _provider: provider,
        add: (name) => {
            store.objects.push(
                {
                    id: 0,
                    name,
                    position: [],
                }
            );
        },
    };

    return (
        <WhiteboardContext.Provider value={value}>
            {children}
        </WhiteboardContext.Provider>
    );
}

export const useWhiteboard = () => useContext(WhiteboardContext);
