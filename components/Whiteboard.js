import {
    useStage,
} from 'react-drawable-overlay';
import {
    useWhiteboard,
} from '../hooks';
import * as Tools from './tools';

export function Whiteboard() {

    debugger;

    const { _store } = useWhiteboard();
    const stage = useStage();

    const objs = _store.objects.toJSON();

    const components = objs.reduce(
        (accum, { id, name, position }) => {
            const c = Tools[name];
            debugger;
            accum.push(Tools[name]);
            return accum;
        },
        [],
    );

    return (
        <>
            <div
                style={{ position: "relative", height: 500, width: 1000 }}
                className="drawable-content"
            >
                {stage}
            </div>
            {
                components.map(
                    (Component, idx) => <Component key={idx} />
                )
            }
        </>
    );
}

Whiteboard.whyDidYouRender = true;
