import {
    Tool,
} from './Tool';
import {
    Textarea,
} from '../';
import styles from './Tool.module.css';

export function TextTool(
    {
        id,
    },
) {

    return (
        <Tool id={id}>
            <div className={styles.textToolContainer}>
                <Textarea />
            </div>
        </Tool>
    );
}
