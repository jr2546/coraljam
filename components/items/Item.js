import {
    SyncProvider,
} from '../../hooks';
import {
    Draggable,
    Focusable,
} from '../';

export function Item(
    {
        id,
        children,
    },
) {

    return (
        <SyncProvider id={id}>
            <Draggable>
                <Focusable>
                    {children}
                </Focusable>
            </Draggable>
        </SyncProvider>
    );
}
