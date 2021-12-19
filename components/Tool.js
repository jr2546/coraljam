import styles from './Tool.module.css';

export function Tool(
    {
        label,
        icon,
        onClick,
    },
) {

    return (
        <div className={styles.toolContainer} onClick={onClick}>
            {label} {icon}
        </div>
    );
}
