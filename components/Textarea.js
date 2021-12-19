import {
    useSyncedValue,
} from '../hooks';
import TextareaAutosize from 'react-textarea-autosize';

export function Textarea(
    props,
) {

    const [text, setText] = useSyncedValue('text');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div className="grow-wrap">
            <TextareaAutosize {...props}  value={text} onChange={handleChange} />
        </div>
    );
}
