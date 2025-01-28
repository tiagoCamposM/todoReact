import style from "./TaskItem.module.css";
import binIcon from '../assets/bin.svg'

export function TaskItem() {
 

  return (
    <div className={style.taskCard}>
      <div className={style.taskContent}>
        <input
            className={style.checkbox}
          type="checkbox"
        />
        <span>
          UM Texto muito longo para ver se está tudo ok com tudo que eu estou fazendo e tentando pois está dificil, mas vamos indo
        </span>
      </div>
      <img src={binIcon}  className="delete-button"/>
    </div>
  );
}