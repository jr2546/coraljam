import {
    useThings2,
} from '../hooks';
import * as Tools from './tools';

export function Jam() {

    const { store } = useThings2();

    // debugger;

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
            {components.map((_, idx) => <_ key={idx} />)}
        </>
    );
}
