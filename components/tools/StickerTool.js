import {
    Tool,
} from './Tool';
import {
    useSyncedValue,
} from '../../hooks';
import {
    FcApproval,
    FcHighPriority,
} from 'react-icons/fc';
import styles from './Tool.module.css';

const map = {
    fcApproval: FcApproval,
    fcHighPriority: FcHighPriority,
};

function Icon(
) {

    const [ meta ] = useSyncedValue('meta');

    const Component = map[meta.sticker];

    return (
        <Component size="3.5rem" />
    );
}

export function StickerTool(
    {
        id,
    },
) {

    return (
        <Tool id={id}>
            <Icon />
        </Tool>
    );
}
