import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import plusTaskIcon from './assets/plus.svg';
import { TaskCounter } from './components/TaskCounter';
import { TaskItem } from './components/TaskItem';
import {  useState, FormEvent, InvalidEvent } from "react"
import { EmptyListTask } from './components/EmptyListTask';

export interface Task {
  idKey: string
  description: string
  isDone: boolean
}

export function App() {

  const [listTasks, setListTask] = useState<Task[]>([])
  const [newTaskText, setNewTaskText] = useState('')
  const [tasksConcluidas, setTasksConcluidas] = useState(0)
  
  const handleCreateTask = (event: FormEvent) => {

    if (newTaskText.trim() === '') {
      return; // Não cria a tarefa se o input estiver vazio
    }

    event.preventDefault()
    const myTask: Task = {
      idKey: Date(),
      description: newTaskText,
      isDone: false,
    }; 

    setListTask((prevList) => {
      const updatedList = [...prevList, myTask];
      setTasksConcluidas(handleTarefasConcluidas(updatedList)); 
      return updatedList;
    });
    setNewTaskText('')
  }

  const renderList = () => {
    if (listTasks.length === 0) {
      return <EmptyListTask />;
    }
    
    return listTasks.map((item) => (
      <TaskItem 
        key={item.idKey}
        task={item} 
        onToggle={handleToggleTask} 
        onDelete= {deleteTask}
      />
    ));
  };

  const handleTarefasConcluidas= (list: Task[]) => {
      return list.filter(task => task.isDone).length
  }

  const handleNewTaskInvalid = (event: InvalidEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('Campo é obrigatório')
  }
  
  const handleToggleTask = (taskId: string) => {
    setListTask((prevList) => {
      const updatedList = prevList.map((task) =>
        task.idKey === taskId ? { ...task, isDone: !task.isDone } : task
      );
      setTasksConcluidas(handleTarefasConcluidas(updatedList)); 
      return updatedList;
    });
  };

  const deleteTask = (idKey: string) => {
    setListTask((prevList) => {
      const updatedList = prevList.filter((item) => item.idKey !== idKey);
      setTasksConcluidas(handleTarefasConcluidas(updatedList)); 
      return updatedList;
    });
  };
  
  return (
    <div >
      <Header />
      <div className={styles.appContainer}>
        <div className={styles.inputContainerTask}>
          <input 
            className={styles.inputTask} 
            type="text"  
            placeholder="Adicionar nova tarefa" 
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            onInvalid={handleNewTaskInvalid}
            required
          />
          <button onClick={handleCreateTask} className={styles.buttonAddTask}>
            <img src={plusTaskIcon} alt="PlusIcon" />
            Criar
          </button>
        </div>
        <TaskCounter
          qtdTarefasCriadas={listTasks.length}
          qtdConcluidas={tasksConcluidas}
         />

        <div className={styles.listTaskContainer}>
          {renderList()}
          
        </div>
      </div>
    </div>
  );
}
