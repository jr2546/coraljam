import {
    useConfiguration,
    useWhiteboard,
} from '../hooks'
import {
    Tool,
} from './Tool';
import styles from './Toolbox.module.css';

export function Toolbox() {

    const { tools } = useConfiguration();

    const whiteboard = useWhiteboard();

    const handleClick = (component) => {
        whiteboard.add(component);
    };

    const toolIcons = tools.map(
        (toolProps, idx) => {
            const { label, icon, component } = toolProps;
            return (
                <Tool key={idx} {...toolProps} label={label} icon={icon} onClick={() => handleClick(component)}/>
            );
        }
    );

    return (
        <div className={styles.toolboxContainer}>
            {toolIcons}
        </div>
    );
}
