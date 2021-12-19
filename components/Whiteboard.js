import React from 'react';
import {
    useStage,
} from 'react-drawable-overlay';
import {
    useWhiteboard,
} from '../hooks';
import * as Tools from './tools';

export function Whiteboard() {

    const { _store } = useWhiteboard();
    const stage = useStage();

    const objs = _store.objects.toJSON();

    return (
        <>
            <div
                style={{ position: "relative", height: 500, width: 1000 }}
                className="drawable-content"
            >
                {stage}
            </div>
            {
                objs.map(
                    ({ id, name, position }) => {
                        const Component = Tools[name];
                        return (
                            <Component key={id} id={id} />
                        );
                    }
                )
            }
        </>
    );
}

Whiteboard.whyDidYouRender = true;
