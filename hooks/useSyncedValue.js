import {
    useWhiteboard,
} from './WhiteboardContext';
import {
    useSyncContext,
} from './SyncContext';

export const useSyncedValue = (
    name,
) => {

    const {
        id,
    } = useSyncContext();

    const {
        _store,
    } = useWhiteboard();

    return [
        _store.objects[id][name],
        (value) => {
            _store.objects[id][name] = value;
        },
    ];
};
