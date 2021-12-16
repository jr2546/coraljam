import { useStage } from "react-drawable-overlay";
import {
    useThings2,
} from '../hooks';
import * as Tools from './tools';

export function Jam() {

    // debugger;

    const { store } = useThings2();
    const stage = useStage();

    const xx = store.box.toJSON();

    const components = xx.reduce(
        (accum, b) => (
            accum.push(Tools[b]),
            accum,
        ),
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
            {components.map((_, idx) => <_ key={idx} />)}
        </>
    );
}
