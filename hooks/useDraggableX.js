import useDraggable from './useDraggable';

export const useDraggableX = () => {

    function onStart() {
        console.log('onStart');
    }
    function onMove() {
        console.log('onMove');
    }
    function onEnd() {
        console.log('onEnd');
    }

    return useDraggable(
        {
            onStart,
            onMove,
            onEnd,
        }
    );

}
