import styles from './TaskCounter.module.css'

export function TaskCounter(){

    return (
        <div className={styles.containerTaskCounter}>
            <div className={styles.leftText}>
                Tarefas Criadas
                <span className={styles.counter}>0</span>
            </div>
            <div className={styles.rightText}>
                Concluídas
                <span className={styles.counter}>0</span>
            </div>
        </div>
    );

}