import useDraggable from '../../hooks/useDraggable';
import styles from './Tool.module.css';

export function StickerTool() {

    function onStart() {
        console.log('onStart');
    }
    function onMove() {
        console.log('onMove');
    }
    function onEnd() {
        console.log('onEnd');
    }

    const {
        target,
    } = useDraggable(
        {
            onStart,
            onMove,
            onEnd,
        }
    );

    return (
        <div className={styles.stickerToolContainer} ref={target}>Two</div>
    );
}
