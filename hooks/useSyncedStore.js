import { useSyncedStore as useBaseSyncedStore } from "@syncedstore/react";
import { globalStore } from '../store';

export const useSyncedStore = () => {

    const store = useBaseSyncedStore(globalStore);

    return store;
}
