import styles from './Tool.module.css';

export function Tool(
    {
        label,
        onClick,
    },
) {

    return (
        <div className={styles.toolContainer} onClick={onClick}>
            {label}
        </div>
    );
}
