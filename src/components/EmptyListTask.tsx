import emptyListIcon from '../assets/emptyList.svg'
import styles from './EmptyListTask.module.css'

export function EmptyListTask(){

    return (
        <div className={styles.container}>
            <img className={styles.imgEmptyList} src={emptyListIcon} alt="emptyList"/>
            <div className={styles.firstText}>Você ainda não tem tarefas cadastradas</div>
            <div className={styles.secondText}>Crie tarefas e organize seus itens a fazer</div>
        </div>
    )

}