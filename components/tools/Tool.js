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
import styles from './Tool.module.css';

export function Focusable(
    {
        children,
    },
) {

    const {
        id,
    } = useSyncContext();
    const [ focused, setFocused ] = useSyncedValue('focused');

    const handleClick = () => {
        setFocused(true);
    };

    const handleOutsideClick = () => {
        setFocused(false);
    };

    return (
        <OutsideClickHandler onOutsideClick={handleOutsideClick}>
            <div className={focused ? styles.focused : null} onClick={handleClick}>
                {children}
            </div>
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
