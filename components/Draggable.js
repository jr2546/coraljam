import {
    useSyncedDraggable,
} from '../hooks';
import styles from './Draggable.module.css';

export function Draggable(
    {
        children,
    },
) {

    const {
        target,
    } = useSyncedDraggable();

    return (
        <div className={styles.draggable} ref={target}>
            {children}
        </div>
    );
}
