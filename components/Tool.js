import {
    useWhiteboard,
} from '../hooks'
import styles from './Tool.module.css';

export function Tool(
    {
        label,
        icon,
        component,
    },
) {

    const whiteboard = useWhiteboard();

    const handleClick = () => {
        whiteboard.add(component);
    };

    return (
        <div className={styles.toolContainer} onClick={handleClick}>
            {label} {icon}
        </div>
    );
}
