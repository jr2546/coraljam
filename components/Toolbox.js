import {
    useConfiguration,
    useThings2,
} from '../hooks'
import {
    Tool,
} from './Tool';
import styles from './Toolbox.module.css';

export function Toolbox() {

    const { tools } = useConfiguration();

    const toolIcons = tools.map(
        (toolProps, idx) => <Tool key={idx} {...toolProps} />
    );

    return (
        <div className={styles.toolboxContainer}>
            {toolIcons}
        </div>
    );
}
