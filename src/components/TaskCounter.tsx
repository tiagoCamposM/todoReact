import styles from './TaskCounter.module.css'

export function TaskCounter({qtdTarefasCriadas, qtdConcluidas}: {qtdConcluidas:number; qtdTarefasCriadas:number}){

    return (
        <div className={styles.containerTaskCounter}>
            <div className={styles.leftText}>
                Tarefas Criadas
                <span className={styles.counter}>{qtdTarefasCriadas}</span>
            </div>
            <div className={styles.rightText}>
                Concluídas
                <span className={styles.counter}>{qtdConcluidas ?? 0} de {qtdTarefasCriadas ?? 0}</span>
            </div>
        </div>
    );

}