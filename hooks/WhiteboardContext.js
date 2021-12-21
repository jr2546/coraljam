import React, {
    useContext,
    useMemo,
    useState,
} from 'react';
import {
    useConfiguration,
    useSyncedStore,
    useWebRtc,
    useUser,
} from './';
import {
    getYjsValue,
} from "@syncedstore/core";

export const WhiteboardContext = React.createContext();

export function WhiteboardProvider(
    {
        children,
    },
) {

    const {
        defaultRoom,
    } = useConfiguration();
    const {
        user,
    } = useUser();
    const store = useSyncedStore();
    const provider = useWebRtc(defaultRoom, getYjsValue(store));

    const value = {
        _store: store,
        _provider: provider,
        add: (name, meta = {}) => {
            store.objects.push(
                {
                    id: store.objects.length,
                    name,
                    position: [],
                    meta,
                    creator: user,
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
