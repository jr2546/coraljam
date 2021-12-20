import {
    Tool,
} from './Tool';
import {
    Textarea,
} from '../';
import {
    useSyncedValue,
} from '../../hooks';
import styles from './NoteTool.module.css';

export function Creator(
) {

    const [creator] = useSyncedValue('creator');

    return (
        <div className={styles.creator}>
            {creator}
        </div>
    );
}

export function NoteTool(
    {
        id,
    },
) {

    return (
        <Tool id={id}>
            <div className={styles.container}>
                <Textarea className={styles.textArea} />
                <Creator />
            </div>
        </Tool>
    );
}
