import {
    useUser,
    SyncProvider,
    useSyncedValue,
    useSyncContext,
} from '../../hooks';
import {
    Draggable,
} from '../Draggable';
import OutsideClickHandler from 'react-outside-click-handler';

export function Focusable(
    {
        children,
    },
) {

    const {
        id,
    } = useSyncContext();

    const handleOutsideClick = () => {
        console.log('You clicked outside of this component', id);
    };

    return (
        <OutsideClickHandler onOutsideClick={handleOutsideClick}>
            {children}
        </OutsideClickHandler>
    );
}

export function Tool(
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
