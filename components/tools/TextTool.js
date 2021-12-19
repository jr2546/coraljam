import {
    useSyncedDraggable,
} from '../../hooks';
import TextareaAutosize from 'react-textarea-autosize';
import styles from './Tool.module.css';

export function TextTool(
    {
        id,
    },
) {

    const {
        target,
g    } = useSyncedDraggable(id);

    return (
        <div className={styles.textToolContainer} ref={target}>
            <TextareaAutosize />
        </div>
    );
}
