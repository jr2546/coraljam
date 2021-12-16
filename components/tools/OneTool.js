import useDraggable from '../../hooks/useDraggable';
import TextareaAutosize from 'react-textarea-autosize';
import styles from './Tool.module.css';

export function OneTool() {

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
        <div className={styles.toolContainer} ref={target}>
            <div className="grow-wrap">
                <TextareaAutosize />
            </div>
        </div>
    );
}
