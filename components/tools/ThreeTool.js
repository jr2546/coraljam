import useDraggable from '../../hooks/useDraggable';
import styles from './Tool.module.css';

export function ThreeTool() {

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
        <div className={styles.toolContainer} ref={target}>Three</div>
    );
}
