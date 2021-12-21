import {
    Item,
} from './Item';
import {
    Textarea,
} from '../';
import {
    useSyncedValue,
} from '../../hooks';
import styles from './Note.module.css';

export function Creator(
) {

    const [creator] = useSyncedValue('creator');

    return (
        <div className={styles.creator}>
            {creator}
        </div>
    );
}

export function Note(
    {
        id,
    },
) {

    return (
        <Item id={id}>
            <div className={styles.container}>
                <Textarea className={styles.textArea} />
                <Creator />
            </div>
        </Item>
    );
}
