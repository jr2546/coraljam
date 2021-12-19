import {
    useLogger,
} from './LoggerContext';
import {
    useDraggable,
} from './useDraggable';
import {
    useSyncContext,
} from './SyncContext';
import {
    useSyncedValue,
} from './useSyncedValue';

export const useSyncedDraggable = (
) => {

    const {
        log,
    } = useLogger();
    const {
        id,
    } = useSyncContext();
    const [
        position,
        setPosition,
    ] = useSyncedValue('position');

    function onMove(
        target,
        newPosition,
    ) {
        log.debug('onMove');
        setPosition(newPosition);
        log.debug('onMovex');
    }

    const { target } = useDraggable(
        {
            setCSS: false,
            onMove,
        }
    );

    if (target.current) {
        log.debug('id', id, position[0], position[1]);
        target.current.style.transform = `translate3d(${position[0]}px, ${position[1]}px, 0)`;
    }

    return { target };
};
