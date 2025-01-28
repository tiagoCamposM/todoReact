import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import plusTaskIcon from './assets/plus.svg';
import { TaskCounter } from './components/TaskCounter';
import { TaskItem } from './components/TaskItem';

export function App() {
  return (
    <div >
      <Header />
      <div className={styles.appContainer}>
        <div className={styles.inputContainerTask}>
          <input className={styles.inputTask} type="text" placeholder="Adicionar nova tarefa" />
          <button className={styles.buttonAddTask}>
            <img src={plusTaskIcon} alt="PlusIcon" />
            Criar
          </button>
        </div>
        <TaskCounter />

        <div className={styles.listTaskContainer}>
          <TaskItem/>
          <TaskItem/>
          <TaskItem/>
        </div>
      </div>
    </div>
  );
}
