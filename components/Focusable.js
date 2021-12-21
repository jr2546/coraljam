import {
    useSyncedValue,
    useSyncContext,
} from '../hooks';
import OutsideClickHandler from 'react-outside-click-handler';
import styles from './Focusable.module.css';

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
