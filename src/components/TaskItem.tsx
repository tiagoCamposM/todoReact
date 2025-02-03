import style from "./TaskItem.module.css";
import binIcon from '../assets/bin.svg'
import {Task} from '../App'




export function TaskItem({ task, onToggle, onDelete }: { task: Task; onToggle: (taskId: string) => void; onDelete: (idKey: string)=> void }) {

  const handleChange = () => {
    onToggle(task.idKey); 
  };

  const handleDelete = () => {
    onDelete(task.idKey); 
  };

  return (
    <div className={style.taskCard}>
      <div className={style.taskContent}>
        <input
            className={style.checkbox}
          type="checkbox"
          checked={task.isDone}
          onChange={handleChange}
        />
        <span className={task.isDone ? style.taskTextCompleted : style.taskText} >
          {task.description}
        </span>
      </div>
      <img onClick={handleDelete} src={binIcon}  className={style.deleteButton}/>
    </div>
  );
}