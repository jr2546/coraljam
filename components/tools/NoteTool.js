import {
    Tool,
} from './Tool';
import {
    Textarea,
} from '../';
import styles from './Tool.module.css';

export function NoteTool(
    {
        id,
    },
) {

    return (
        <Tool id={id}>
            <div className={styles.noteToolContainer}>
                <Textarea className={styles.noteTextArea} />
            </div>
        </Tool>
    );
}
