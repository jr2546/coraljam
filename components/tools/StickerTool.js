import {
    Tool,
} from './Tool';
import {
    FcApproval,
} from 'react-icons/fc';
import styles from './Tool.module.css';

export function StickerTool(
    {
        id,
    },
) {

    return (
        <Tool id={id}>
            <FcApproval size="3.5rem" />
        </Tool>
    );
}
