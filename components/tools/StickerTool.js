import {
    Tool,
} from './Tool';
import styles from './Tool.module.css';

export function StickerTool(
    {
        id,
    },
) {

    return (
        <Tool id={id}>
            <div className={styles.stickerToolContainer}>
                Sticker
            </div>
        </Tool>
    );
}
