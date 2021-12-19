import { useDraggableX } from '../../hooks/useDraggableX';
import TextareaAutosize from 'react-textarea-autosize';
import styles from './Tool.module.css';

export function NoteTool(
    {
        id,
        position,
    },
) {

    const {
        target,
    } = useDraggableX(id);

    return (
        <div className={styles.noteToolContainer} ref={target}>
            <div className="grow-wrap">
                <TextareaAutosize style={{ backgroundColor: '#ffffa5' }}/>
            </div>
        </div>
    );
}
