import {
    useThings2,
} from '../hooks'
import styles from './Toolbox.module.css';

export function Tool(
    {
        label,
        component,
    },
) {

    const { store } = useThings2();

    const handleClick = () => {
        // debugger;
        store.box.push(component);
    };

    return (
        <div className={styles.toolContainer} onClick={handleClick}>
            {label}
        </div>
    );
}
