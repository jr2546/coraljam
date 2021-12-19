import { syncedStore } from "@syncedstore/core";

export const globalStore = syncedStore(
    {
        objects: [],
    },
);
