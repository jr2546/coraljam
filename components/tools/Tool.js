import {
    SyncProvider,
} from '../../hooks';
import {
    Draggable,
} from '../Draggable';

export function Tool(
    {
        id,
        children,
    },
) {

    return (
        <SyncProvider id={id}>
            <Draggable>
                {children}
            </Draggable>
        </SyncProvider>
    );
}
