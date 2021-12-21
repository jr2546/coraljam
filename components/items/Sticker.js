import {
    Item,
} from './Item';
import {
    useSyncedValue,
} from '../../hooks';
import {
    FcApproval,
    FcHighPriority,
    FcUp,
    FcLeft,
    FcDown,
    FcRight,
} from 'react-icons/fc';
import styles from './Sticker.module.css';

const map = {
    fcApproval: FcApproval,
    fcHighPriority: FcHighPriority,
    fcUp: FcUp,
    fcLeft: FcLeft,
    fcDown: FcDown,
    fcRight: FcRight,
};

function Icon(
) {

    const [ meta ] = useSyncedValue('meta');

    const Component = map[meta.sticker];

    return (
        <Component size="3.5rem" />
    );
}

export function Sticker(
    {
        id,
    },
) {

    return (
        <Item id={id}>
            <Icon />
        </Item>
    );
}
