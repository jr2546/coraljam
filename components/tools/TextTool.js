import useDraggable from '../../hooks/useDraggable';
import TextareaAutosize from 'react-textarea-autosize';
import styles from './Tool.module.css';

export function TextTool() {

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
        <div className={styles.textToolContainer} ref={target}>
            <TextareaAutosize/>
        </div>
    );
}
