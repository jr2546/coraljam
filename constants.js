import {
    FaBeer,
} from 'react-icons/fa';
import {
    FcApproval,
    FcHighPriority,
    FcIcon,
    FcUp,
    FcDown,
    FcLeft,
    FcRight,
} from 'react-icons/fc';

export const defaultRoom = 'coraljam';

export const tools = [
    {
        label: 'Note',
        component: 'Note',
    },
    {
        label: <FcApproval />,
        component: 'Sticker',
        meta: {
            sticker: 'fcApproval',
        },
    },
    {
        label: <FcHighPriority />,
        component: 'Sticker',
        meta: {
            sticker: 'fcHighPriority',
        },
    },
    {
        label: <FcUp />,
        component: 'Sticker',
        meta: {
            sticker: 'fcUp',
        },
    },
    {
        label: <FcLeft />,
        component: 'Sticker',
        meta: {
            sticker: 'fcLeft',
        },
    },
    {
        label: <FcDown />,
        component: 'Sticker',
        meta: {
            sticker: 'fcDown',
        },
    },
    {
        label: <FcRight />,
        component: 'Sticker',
        meta: {
            sticker: 'fcRight',
        },
    },
    {
        label: 'Text',
        component: 'Text',
    },
];
