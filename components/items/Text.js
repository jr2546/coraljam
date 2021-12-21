import {
    Item,
} from './Item';
import {
    Textarea,
} from '../';
import styles from './Text.module.css';

export function Text(
    {
        id,
    },
) {

    return (
        <Item id={id}>
            <div className={styles.container}>
                <Textarea />
            </div>
        </Item>
    );
}
