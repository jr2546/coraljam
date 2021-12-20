import {
    FaBeer,
} from 'react-icons/fa';
import {
    FcApproval,
} from 'react-icons/fc';

export const defaultRoom = 'coraljam';

export const tools = [
    {
        label: 'Note',
        icon: <FcApproval />,
        component: 'NoteTool',
    },
    {
        label: 'Sticker',
        icon: <FaBeer />,
        component: 'StickerTool',
    },
    {
        label: 'Text',
        icon: <FaBeer />,
        component: 'TextTool',
    },
];
