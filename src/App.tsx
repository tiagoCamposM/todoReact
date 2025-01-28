import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import plusTaskIcon from './assets/plus.svg';
import { TaskCounter } from './components/TaskCounter';
import { EmptyListTask } from './components/EmptyListTask';

export function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <div className={styles.inputContainerTask}>
        <input className={styles.inputTask} type="text" placeholder="Adicionar nova tarefa" />
        <button className={styles.buttonAddTask}>
          <img src={plusTaskIcon} alt="PlusIcon" />
          Criar
        </button>
      </div>
      <TaskCounter />

      <EmptyListTask/>

    </div>
  );
}
