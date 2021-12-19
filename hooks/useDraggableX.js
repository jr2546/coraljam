import {
    useWhiteboard,
} from './WhiteboardContext';
import useDraggable from './useDraggable';

export const useDraggableX = (
    id,
) => {

    const {
        _store,
    } = useWhiteboard();

    function onStart() {
        console.log('onStart');
    }
    function onMove(
        target,
        position,
    ) {
        console.log('onMove');
        _store.objects[id].position = position;
    }
    function onEnd() {
        console.log('onEnd');
    }

    const { target } = useDraggable(
        {
            setCSS: false,
            onStart,
            onMove,
            onEnd,
        }
    );

    if (_store.objects[id] && target.current) {
        const position = _store.objects[id].position;
        target.current.style.transform = `translate3d(${position[0]}px, ${position[1]}px, 0)`;
    }

    return { target };
};
