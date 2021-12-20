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

let idx = 0;

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
        add: (name) => {
            store.objects.push(
                {
                    id: idx++,
                    name,
                    position: [],
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
